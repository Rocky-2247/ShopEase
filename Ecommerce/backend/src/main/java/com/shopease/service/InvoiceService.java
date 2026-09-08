package com.shopease.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;
import com.lowagie.text.pdf.draw.LineSeparator;
import com.shopease.entity.Order;
import com.shopease.entity.OrderItem;
import com.shopease.entity.User;
import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.time.format.DateTimeFormatter;
import java.util.Map;

@Service
public class InvoiceService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public byte[] generateInvoicePdf(Order order, User user) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document document = new Document(PageSize.A4, 36, 36, 36, 36);
            PdfWriter.getInstance(document, out);
            document.open();

            // Font Palettes
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 22, new Color(79, 70, 229));
            Font subTitleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, new Color(15, 23, 42));
            Font headerFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, Color.WHITE);
            Font bodyFont = FontFactory.getFont(FontFactory.HELVETICA, 10, new Color(51, 65, 85));
            Font boldBodyFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10, new Color(15, 23, 42));
            Font smallFont = FontFactory.getFont(FontFactory.HELVETICA, 8, new Color(100, 116, 139));

            // Header Section
            PdfPTable headerTable = new PdfPTable(2);
            headerTable.setWidthPercentage(100);
            headerTable.setWidths(new float[]{1, 1});

            // Company Info (Left)
            PdfPCell companyCell = new PdfPCell();
            companyCell.setBorder(Rectangle.NO_BORDER);
            companyCell.addElement(new Paragraph("🛍️ ShopEase Store", titleFont));
            companyCell.addElement(new Paragraph("Enterprise Full-Stack Commerce", smallFont));
            companyCell.addElement(new Paragraph("support@shopease.com | https://store.shopease.com", smallFont));
            headerTable.addCell(companyCell);

            // Invoice Title & Metadata (Right)
            PdfPCell invoiceMetaCell = new PdfPCell();
            invoiceMetaCell.setBorder(Rectangle.NO_BORDER);
            invoiceMetaCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
            Paragraph invTitle = new Paragraph("OFFICIAL TAX INVOICE", subTitleFont);
            invTitle.setAlignment(Element.ALIGN_RIGHT);
            invoiceMetaCell.addElement(invTitle);

            String formattedDate = order.getCreatedAt() != null 
                    ? order.getCreatedAt().format(DateTimeFormatter.ofPattern("MMM dd, yyyy HH:mm"))
                    : "N/A";

            Paragraph invNumber = new Paragraph("Invoice #: " + order.getOrderNumber(), boldBodyFont);
            invNumber.setAlignment(Element.ALIGN_RIGHT);
            invoiceMetaCell.addElement(invNumber);

            Paragraph invDate = new Paragraph("Date: " + formattedDate, smallFont);
            invDate.setAlignment(Element.ALIGN_RIGHT);
            invoiceMetaCell.addElement(invDate);

            Paragraph invStatus = new Paragraph("Status: " + order.getOrderStatus().toUpperCase() + " (" + order.getPaymentStatus() + ")", smallFont);
            invStatus.setAlignment(Element.ALIGN_RIGHT);
            invoiceMetaCell.addElement(invStatus);

            headerTable.addCell(invoiceMetaCell);
            document.add(headerTable);

            // Divider
            LineSeparator sep = new LineSeparator();
            sep.setLineColor(new Color(226, 232, 240));
            document.add(new Paragraph(" "));
            document.add(sep);
            document.add(new Paragraph(" "));

            // Customer Details Section
            PdfPTable customerTable = new PdfPTable(2);
            customerTable.setWidthPercentage(100);
            customerTable.setWidths(new float[]{1, 1});

            PdfPCell billToCell = new PdfPCell();
            billToCell.setBorder(Rectangle.NO_BORDER);
            billToCell.addElement(new Paragraph("BILLED TO:", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9, new Color(100, 116, 139))));
            billToCell.addElement(new Paragraph(user != null ? user.getName() : "Valued Customer", boldBodyFont));
            billToCell.addElement(new Paragraph(user != null ? user.getEmail() : "", bodyFont));
            billToCell.addElement(new Paragraph(user != null && user.getPhone() != null ? user.getPhone() : "", bodyFont));
            customerTable.addCell(billToCell);

            PdfPCell shipToCell = new PdfPCell();
            shipToCell.setBorder(Rectangle.NO_BORDER);
            shipToCell.addElement(new Paragraph("SHIPPING DESTINATION:", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 9, new Color(100, 116, 139))));

            String street = "";
            String cityState = "";
            if (order.getShippingAddressSnapshot() != null) {
                try {
                    Map<String, Object> addrMap = objectMapper.readValue(order.getShippingAddressSnapshot(), Map.class);
                    street = String.valueOf(addrMap.getOrDefault("street", ""));
                    String city = String.valueOf(addrMap.getOrDefault("city", ""));
                    String state = String.valueOf(addrMap.getOrDefault("state", ""));
                    String pincode = String.valueOf(addrMap.getOrDefault("pincode", ""));
                    cityState = city + ", " + state + " " + pincode;
                } catch (Exception e) {
                    street = order.getShippingAddressSnapshot();
                }
            }
            shipToCell.addElement(new Paragraph(street, bodyFont));
            shipToCell.addElement(new Paragraph(cityState, bodyFont));
            shipToCell.addElement(new Paragraph("Payment Method: " + order.getPaymentMethod(), boldBodyFont));
            customerTable.addCell(shipToCell);

            document.add(customerTable);
            document.add(new Paragraph(" "));

            // Items Table
            PdfPTable itemsTable = new PdfPTable(4);
            itemsTable.setWidthPercentage(100);
            itemsTable.setWidths(new float[]{4, 1.5f, 1, 1.5f});

            // Table Headers
            String[] headers = {"Item Description", "Unit Price", "Qty", "Total"};
            for (String h : headers) {
                PdfPCell cell = new PdfPCell(new Phrase(h, headerFont));
                cell.setBackgroundColor(new Color(79, 70, 229));
                cell.setPadding(6);
                if (h.equals("Item Description")) {
                    cell.setHorizontalAlignment(Element.ALIGN_LEFT);
                } else {
                    cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
                }
                itemsTable.addCell(cell);
            }

            // Table Data Rows
            for (OrderItem item : order.getItems()) {
                PdfPCell nameCell = new PdfPCell(new Phrase(item.getProductNameSnapshot(), bodyFont));
                nameCell.setPadding(6);
                itemsTable.addCell(nameCell);

                PdfPCell priceCell = new PdfPCell(new Phrase(String.format("$%.2f", item.getPrice()), bodyFont));
                priceCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
                priceCell.setPadding(6);
                itemsTable.addCell(priceCell);

                PdfPCell qtyCell = new PdfPCell(new Phrase(String.valueOf(item.getQuantity()), bodyFont));
                qtyCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
                qtyCell.setPadding(6);
                itemsTable.addCell(qtyCell);

                double lineTotal = item.getPrice() * item.getQuantity();
                PdfPCell totalCell = new PdfPCell(new Phrase(String.format("$%.2f", lineTotal), boldBodyFont));
                totalCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
                totalCell.setPadding(6);
                itemsTable.addCell(totalCell);
            }

            document.add(itemsTable);
            document.add(new Paragraph(" "));

            // Financial Summary
            PdfPTable summaryTable = new PdfPTable(2);
            summaryTable.setWidthPercentage(45);
            summaryTable.setHorizontalAlignment(Element.ALIGN_RIGHT);
            summaryTable.setWidths(new float[]{2, 1.5f});

            addSummaryRow(summaryTable, "Subtotal:", String.format("$%.2f", order.getTotalAmount()), bodyFont);
            if (order.getDiscountAmount() != null && order.getDiscountAmount() > 0) {
                addSummaryRow(summaryTable, "Discount (Coupon/Pts):", String.format("-$%.2f", order.getDiscountAmount()), FontFactory.getFont(FontFactory.HELVETICA, 10, new Color(16, 185, 129)));
            }
            addSummaryRow(summaryTable, "Shipping Fee:", order.getShippingCharge() != null && order.getShippingCharge() > 0 ? String.format("$%.2f", order.getShippingCharge()) : "FREE", bodyFont);
            addSummaryRow(summaryTable, "Final Total Paid:", String.format("$%.2f", order.getFinalAmount()), FontFactory.getFont(FontFactory.HELVETICA_BOLD, 12, new Color(79, 70, 229)));

            document.add(summaryTable);

            // Footer Note
            document.add(new Paragraph(" "));
            Paragraph footer = new Paragraph("Thank you for shopping with ShopEase! For support inquiries, reach us at support@shopease.com", smallFont);
            footer.setAlignment(Element.ALIGN_CENTER);
            document.add(footer);

            document.close();
            return out.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Failed to generate PDF invoice: " + e.getMessage(), e);
        }
    }

    private void addSummaryRow(PdfPTable table, String label, String value, Font font) {
        PdfPCell labelCell = new PdfPCell(new Phrase(label, font));
        labelCell.setBorder(Rectangle.NO_BORDER);
        labelCell.setHorizontalAlignment(Element.ALIGN_LEFT);
        labelCell.setPadding(3);
        table.addCell(labelCell);

        PdfPCell valueCell = new PdfPCell(new Phrase(value, font));
        valueCell.setBorder(Rectangle.NO_BORDER);
        valueCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
        valueCell.setPadding(3);
        table.addCell(valueCell);
    }
}
