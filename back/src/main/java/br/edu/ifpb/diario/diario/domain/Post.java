package br.edu.ifpb.diario.diario.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "posts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue
    private UUID id;

    @NotBlank(message = "O título é obrigatório")
    @Size(max = 150, message = "O título deve ter no máximo 150 caracteres")
    @Column(nullable = false)
    private String title;

    @Size(max = 255, message = "O subtítulo deve ter no máximo 255 caracteres")
    private String subtitle;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @NotBlank(message = "O título é obrigatório")
    @Size(max = 500, message = "A URL da imagem deve ter no máximo 500 caracteres")
    private String imageUrl;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
