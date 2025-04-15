package br.edu.ifpb.diario.diario.domain;

import java.util.UUID;

public interface Post {

    UUID getId();
    void setId(UUID id);

    String getContent();
    void setContent(String content);

    String getTitle();
    void setTitle(String title);

    String getSubtitle();
    void setSubtitle(String subtitle);

    String getImageUrl();
    void setImageUrl(String imageUrl);
}
