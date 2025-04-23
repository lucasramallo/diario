'use client';

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from '../styles/Post.module.css';
import axios from 'axios';
import { UUID } from "crypto";

interface PostResponse {
  id: UUID;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  createdAt: Date
}

export default function PostPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [post, setPost] = useState<PostResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostResponse>(`http://localhost:8080/api/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (

      <div className={styles.container}>
        <article className={styles.post}>
          <span className={styles.date}>{post.createdAt.toString()}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <h2 className={styles.subtitle}>{post.subtitle}</h2>
          <img src={post.imageUrl} alt={post.title} className={styles.image} />
          <p className={styles.content}>{post.content}</p>
        </article>
      </div>
  );
}
    