package br.edu.ifpb.diario.diario.dtos;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.UUID;

public record PostResquestDTO(
        String title,
        String subtitle,
        String content,
        String imageUrl
) {
}
