package br.edu.ifpb.diario.diario.service;

import java.util.List;
import br.edu.ifpb.diario.diario.domain.Post;
import br.edu.ifpb.diario.diario.repository.PostRepository;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public Post createPost(Post post) {
        if (post.getId() != null) {
            throw new IllegalArgumentException("Novo post não deve ter um Id que já existe.");
        }
        return postRepository.save(post);
    }

    @Override
    public void deletePost(UUID id) {
        if (!postRepository.existsById(id)) {
            throw new RuntimeException("Post não encontrado com id: " + id);
        }
        postRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Post getPostById(UUID id) {
        return postRepository.findById(id).orElseThrow(() -> new RuntimeException("Post não encontrado com id: " + id));
    }

    @Override
    public Post updatePost(UUID id, Post post) {
        Post existingPost = getPostById(id);

        existingPost.setTitle(post.getTitle());
        existingPost.setContent(post.getContent());
        existingPost.setSubtitle(post.getSubtitle());
        existingPost.setImageUrl(post.getImageUrl());

        return postRepository.save(existingPost);
    }

}
