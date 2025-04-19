package br.edu.ifpb.diario.diario.repository;

import br.edu.ifpb.diario.diario.domain.Post;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, UUID> {

    List<Post> findAll();

    Optional<Post> findById(UUID id);

    Post save(Post post);

    void deleteById(UUID id);
}
