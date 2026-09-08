package com.shopease.controller;

import com.shopease.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/api/upload")
@Tag(name = "File Uploads", description = "Multipart image upload endpoints")
public class UploadController {

    @Value("${file.upload-dir:uploads}")
    private String uploadDir;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Upload a single image file")
    public ResponseEntity<ApiResponse<Map<String, String>>> uploadFile(
            @RequestParam(value = "image", required = false) MultipartFile image,
            @RequestParam(value = "file", required = false) MultipartFile file) {

        MultipartFile target = image != null ? image : file;
        if (target == null || target.isEmpty()) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Please select a valid image file to upload"));
        }

        try {
            String url = saveFile(target);
            Map<String, String> data = Map.of("url", url);
            
            ApiResponse<Map<String, String>> response = ApiResponse.<Map<String, String>>builder()
                    .success(true)
                    .message("File uploaded successfully")
                    .url(url)
                    .data(data)
                    .build();

            return ResponseEntity.ok(response);
        } catch (IOException e) {
            log.error("Failed to upload file", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("Failed to store file: " + e.getMessage()));
        }
    }

    @PostMapping(value = "/multiple", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Upload multiple image files")
    public ResponseEntity<ApiResponse<List<String>>> uploadMultipleFiles(
            @RequestParam(value = "images", required = false) List<MultipartFile> images,
            @RequestParam(value = "files", required = false) List<MultipartFile> files) {

        List<MultipartFile> targets = images != null ? images : files;
        if (targets == null || targets.isEmpty()) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Please select at least one file"));
        }

        List<String> urls = new ArrayList<>();
        try {
            for (MultipartFile f : targets) {
                if (!f.isEmpty()) {
                    urls.add(saveFile(f));
                }
            }
            return ResponseEntity.ok(ApiResponse.success(urls, "Files uploaded successfully"));
        } catch (IOException e) {
            log.error("Failed to upload multiple files", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("Failed to store files: " + e.getMessage()));
        }
    }

    private String saveFile(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get(uploadDir).toAbsolutePath().normalize();
        File uploadFolder = uploadPath.toFile();
        if (!uploadFolder.exists()) {
            uploadFolder.mkdirs();
        }

        String originalFilename = StringUtils.cleanPath(Objects.requireNonNullElse(file.getOriginalFilename(), "image.jpg"));
        String extension = "";
        int dotIndex = originalFilename.lastIndexOf('.');
        if (dotIndex > 0) {
            extension = originalFilename.substring(dotIndex).toLowerCase();
        }

        String safeBaseName = originalFilename.replaceAll("[^a-zA-Z0-9.-]", "_");
        String uniqueFilename = System.currentTimeMillis() + "_" + UUID.randomUUID().toString().substring(0, 8) + (extension.isEmpty() ? ".jpg" : "") + "_" + safeBaseName;

        Path targetLocation = uploadPath.resolve(uniqueFilename);
        Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

        return "/uploads/" + uniqueFilename;
    }
}
