package br.edu.ifpb.diario.diario.controller;

import br.edu.ifpb.diario.diario.config.FileStorageProperties;
import br.edu.ifpb.diario.diario.domain.Post;
import br.edu.ifpb.diario.diario.dtos.ImageDTO;
import br.edu.ifpb.diario.diario.dtos.PostRequestDTO;
import br.edu.ifpb.diario.diario.dtos.PostResponseDTO;
import br.edu.ifpb.diario.diario.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private final Path fileStorageLocation;

    @Autowired
    private PostService postService;

    public PostController(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();
    }

    @PostMapping()
    public ResponseEntity<PostResponseDTO> save(@RequestBody PostRequestDTO postRequestDTO) {
        PostResponseDTO savedPost = postService.createPost(postRequestDTO);
        if (savedPost == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(savedPost);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostResponseDTO> getById(@PathVariable UUID id) {
        PostResponseDTO post = postService.getPostById(id);
        if (post != null) {
            return ResponseEntity.ok(post);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping()
    public ResponseEntity<List<PostResponseDTO>> getAll() {
        List<PostResponseDTO> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }

    @PostMapping("/upload")
    public ResponseEntity<ImageDTO> upload(@RequestParam("file") MultipartFile file) {
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));

        try {
            Path targetLocation = fileStorageLocation.resolve(fileName);
            file.transferTo(targetLocation);

            ImageDTO imageDTO = postService.uploadImage(targetLocation.toString(), file.getOriginalFilename());

            return ResponseEntity.ok(imageDTO);
        } catch (IOException ex) {
            ex.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
