package br.edu.ifpb.diario.diario.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record PostResponseDTO(
        UUID id,
        String title,
        String subtitle,
        String content,
        String imageUrl,
        LocalDateTime createdAt
) {
}