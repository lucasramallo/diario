package br.edu.ifpb.diario.diario.controller;

import br.edu.ifpb.diario.diario.config.FileStorageProperties;
import br.edu.ifpb.diario.diario.dtos.ImageDTO;
import br.edu.ifpb.diario.diario.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final Path fileStorageLocation;

    @Autowired
    private PostService fileService;

    public PostController(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();
    }

    @PostMapping("/upload")
    public ResponseEntity<ImageDTO> upload(@RequestParam("file") MultipartFile file) {
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

        try {
            Path targetLocation = fileStorageLocation.resolve(fileName);
            file.transferTo(targetLocation);

            ImageDTO imageDTO = fileService.uploadImage(targetLocation.toString(), file.getOriginalFilename());

            return ResponseEntity.ok(imageDTO);
        } catch (IOException ex) {
            ex.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
