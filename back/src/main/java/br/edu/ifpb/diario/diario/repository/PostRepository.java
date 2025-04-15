package br.edu.ifpb.diario.diario.repository;

import br.edu.ifpb.diario.diario.domain.Post;
import java.util.List;
import java.util.Optional;

public interface PostRepository {

    List<Post> findAll();

    Optional<Post> findById(Long id);

    Post save(Post post);

    void deleteById(Long id);
}
