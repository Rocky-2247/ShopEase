package com.shopease.service;

import com.shopease.dto.CartDtos.*;
import com.shopease.entity.CartItem;
import com.shopease.entity.Product;
import com.shopease.entity.ProductVariant;
import com.shopease.repository.CartItemRepository;
import com.shopease.repository.ProductRepository;
import com.shopease.repository.ProductVariantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final ProductVariantRepository productVariantRepository;

    @Transactional(readOnly = true)
    public CartResponse getCart(Long userId, String sessionId) {
        List<CartItem> items;
        if (userId != null) {
            items = cartItemRepository.findByUserIdOrderByCreatedAtDesc(userId);
        } else if (sessionId != null && !sessionId.isBlank()) {
            items = cartItemRepository.findBySessionIdOrderByCreatedAtDesc(sessionId);
        } else {
            return CartResponse.builder().items(Collections.emptyList()).subtotal(0.0).count(0).build();
        }

        return formatCart(items);
    }

    @Transactional
    public CartResponse addToCart(Long userId, AddToCartRequest request) {
        String sessionId = request.getSessionId();
        if (userId == null && (sessionId == null || sessionId.isBlank())) {
            throw new IllegalArgumentException("Cart identifier (user or session ID) is required");
        }

        int qty = (request.getQuantity() != null && request.getQuantity() > 0) ? request.getQuantity() : 1;

        Product product = productRepository.findById(request.getProductId())
                .orElseThrow(() -> new IllegalArgumentException("Product not found"));

        ProductVariant variant = null;
        if (request.getVariantId() != null) {
            variant = productVariantRepository.findById(request.getVariantId()).orElse(null);
        }

        int availableStock = (variant != null) ? variant.getStock() : product.getStock();
        if (availableStock < qty) {
            throw new IllegalArgumentException("Only " + availableStock + " items remaining in stock");
        }

        Optional<CartItem> existingItem;
        if (userId != null) {
            if (request.getVariantId() != null) {
                existingItem = cartItemRepository.findByUserIdAndProductIdAndVariantId(userId, request.getProductId(), request.getVariantId());
            } else {
                existingItem = cartItemRepository.findByUserIdAndProductIdAndVariantIdIsNull(userId, request.getProductId());
            }
        } else {
            if (request.getVariantId() != null) {
                existingItem = cartItemRepository.findBySessionIdAndProductIdAndVariantId(sessionId, request.getProductId(), request.getVariantId());
            } else {
                existingItem = cartItemRepository.findBySessionIdAndProductIdAndVariantIdIsNull(sessionId, request.getProductId());
            }
        }

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            int newQty = item.getQuantity() + qty;
            if (availableStock < newQty) {
                throw new IllegalArgumentException("Cannot add more. Max stock available: " + availableStock);
            }
            item.setQuantity(newQty);
            cartItemRepository.save(item);
        } else {
            CartItem newItem = CartItem.builder()
                    .userId(userId)
                    .sessionId(userId == null ? sessionId : null)
                    .productId(request.getProductId())
                    .variantId(request.getVariantId())
                    .quantity(qty)
                    .build();
            cartItemRepository.save(newItem);
        }

        return getCart(userId, sessionId);
    }

    @Transactional
    public CartResponse updateCartItem(Long userId, String sessionId, UpdateCartItemRequest request) {
        if (userId == null && (sessionId == null || sessionId.isBlank())) {
            throw new IllegalArgumentException("Cart identifier required");
        }

        int qty = request.getQuantity() != null ? request.getQuantity() : 0;

        CartItem item = null;
        if (request.getId() != null) {
            item = cartItemRepository.findById(request.getId()).orElse(null);
        }
        if (item == null && request.getProductId() != null) {
            if (userId != null) {
                item = cartItemRepository.findByUserIdAndProductIdAndVariantIdIsNull(userId, request.getProductId()).orElse(null);
            } else {
                item = cartItemRepository.findBySessionIdAndProductIdAndVariantIdIsNull(sessionId, request.getProductId()).orElse(null);
            }
        }

        if (item == null) {
            throw new IllegalArgumentException("Item not found in cart");
        }

        if (qty <= 0) {
            cartItemRepository.delete(item);
            return getCart(userId, sessionId);
        }

        int availableStock = 999;
        if (item.getVariantId() != null) {
            ProductVariant v = productVariantRepository.findById(item.getVariantId()).orElse(null);
            if (v != null) availableStock = v.getStock();
        } else {
            Product p = productRepository.findById(item.getProductId()).orElse(null);
            if (p != null) availableStock = p.getStock();
        }

        if (availableStock < qty) {
            throw new IllegalArgumentException("Only " + availableStock + " units available in stock");
        }

        item.setQuantity(qty);
        cartItemRepository.save(item);

        return getCart(userId, sessionId);
    }

    @Transactional
    public CartResponse removeFromCart(Long userId, String sessionId, Long itemId) {
        if (userId == null && (sessionId == null || sessionId.isBlank())) {
            throw new IllegalArgumentException("Cart identifier required");
        }

        Optional<CartItem> itemOpt = cartItemRepository.findById(itemId);
        if (itemOpt.isPresent()) {
            cartItemRepository.delete(itemOpt.get());
        } else {
            if (userId != null) {
                cartItemRepository.findFirstByUserIdAndProductId(userId, itemId)
                        .ifPresent(cartItemRepository::delete);
            } else {
                cartItemRepository.findFirstBySessionIdAndProductId(sessionId, itemId)
                        .ifPresent(cartItemRepository::delete);
            }
        }

        return getCart(userId, sessionId);
    }

    @Transactional
    public CartResponse clearCart(Long userId, String sessionId) {
        if (userId != null) {
            cartItemRepository.deleteByUserId(userId);
        } else if (sessionId != null && !sessionId.isBlank()) {
            cartItemRepository.deleteBySessionId(sessionId);
        }

        return CartResponse.builder().items(Collections.emptyList()).subtotal(0.0).count(0).build();
    }

    @Transactional
    public CartResponse mergeGuestCart(Long userId, MergeCartRequest request) {
        if (request.getSessionId() != null && !request.getSessionId().isBlank()) {
            List<CartItem> guestItems = cartItemRepository.findBySessionIdOrderByCreatedAtDesc(request.getSessionId());

            for (CartItem gItem : guestItems) {
                Optional<CartItem> existing;
                if (gItem.getVariantId() != null) {
                    existing = cartItemRepository.findByUserIdAndProductIdAndVariantId(userId, gItem.getProductId(), gItem.getVariantId());
                } else {
                    existing = cartItemRepository.findByUserIdAndProductIdAndVariantIdIsNull(userId, gItem.getProductId());
                }

                if (existing.isPresent()) {
                    CartItem userItem = existing.get();
                    userItem.setQuantity(userItem.getQuantity() + gItem.getQuantity());
                    cartItemRepository.save(userItem);
                    cartItemRepository.delete(gItem);
                } else {
                    gItem.setUserId(userId);
                    gItem.setSessionId(null);
                    cartItemRepository.save(gItem);
                }
            }
        }

        if (request.getItems() != null && !request.getItems().isEmpty()) {
            for (AddToCartRequest it : request.getItems()) {
                if (it.getProductId() == null) continue;
                AddToCartRequest reqCopy = AddToCartRequest.builder()
                        .productId(it.getProductId())
                        .variantId(it.getVariantId())
                        .quantity(it.getQuantity() != null ? it.getQuantity() : 1)
                        .build();
                addToCart(userId, reqCopy);
            }
        }

        return getCart(userId, null);
    }

    private CartResponse formatCart(List<CartItem> items) {
        double subtotal = 0.0;
        int count = 0;
        List<CartItemResponse> formattedItems = new ArrayList<>();

        for (CartItem item : items) {
            Product p = item.getProduct();
            if (p == null) {
                p = productRepository.findById(item.getProductId()).orElse(null);
            }
            if (p == null) continue;

            ProductVariant v = item.getVariant();
            if (v == null && item.getVariantId() != null) {
                v = productVariantRepository.findById(item.getVariantId()).orElse(null);
            }

            double unitPrice;
            if (v != null) {
                unitPrice = v.getDiscountPrice() != null ? v.getDiscountPrice() : v.getPrice();
            } else {
                unitPrice = p.getDiscountPrice() != null ? p.getDiscountPrice() : p.getPrice();
            }

            double itemTotal = unitPrice * item.getQuantity();
            subtotal += itemTotal;
            count += item.getQuantity();

            Map<String, Object> productMap = new HashMap<>();
            productMap.put("id", p.getId());
            productMap.put("name", v != null ? p.getName() + " (" + v.getName() + ")" : p.getName());
            productMap.put("slug", p.getSlug());
            productMap.put("price", v != null ? v.getPrice() : p.getPrice());
            productMap.put("discount_price", v != null ? v.getDiscountPrice() : p.getDiscountPrice());
            productMap.put("stock", v != null ? v.getStock() : p.getStock());
            productMap.put("image_url", (v != null && v.getImageUrl() != null) ? v.getImageUrl() : p.getImageUrl());
            productMap.put("category", p.getCategory());

            formattedItems.add(CartItemResponse.builder()
                    .id(item.getId())
                    .productId(item.getProductId())
                    .variantId(item.getVariantId())
                    .quantity(item.getQuantity())
                    .product(productMap)
                    .itemTotal(Math.round(itemTotal * 100.0) / 100.0)
                    .build());
        }

        return CartResponse.builder()
                .items(formattedItems)
                .subtotal(Math.round(subtotal * 100.0) / 100.0)
                .count(count)
                .build();
    }
}
