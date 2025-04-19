package br.edu.ifpb.diario.diario.repository;

import br.edu.ifpb.diario.diario.domain.Post;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, UUID> {

}
