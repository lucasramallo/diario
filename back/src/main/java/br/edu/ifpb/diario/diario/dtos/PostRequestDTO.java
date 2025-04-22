package br.edu.ifpb.diario.diario.dtos;

public record PostRequestDTO(
        String title,
        String subtitle,
        String content,
        String imageUrl
) {
}
