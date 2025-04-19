package br.edu.ifpb.diario.diario.service;

import br.edu.ifpb.diario.diario.domain.Post;
import java.util.List;
import java.util.UUID;

public interface PostService  {

    List<Post> getAllPosts();

    Post getPostById(UUID id);

    Post createPost(Post post);

    Post updatePost(UUID id, Post post);

    void deletePost(UUID id);
}
