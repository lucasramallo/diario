// src/app/pages/Post.tsx
'use client';

import React from "react";
import { useSearchParams } from "next/navigation";
import styles from '../styles/Post.module.css';

interface Post {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  content: string;
}

// Dados mockados - deve ser igual ao da sua Home
const mockPosts: Post[] = [
    {
      id: 1,
      date: "April 2, 2025",
      title: "Primeiro Contato com a Programação",
      subtitle: "Descobrindo um novo mundo",
      content: "Tudo começou quando decidi fazer um curso online gratuito. Mesmo sem saber nada, fui me desafiando diariamente, resolvendo exercícios e criando pequenos projetos. No início, tudo parecia um bicho de sete cabeças. Mas a curiosidade me mantinha motivado. Hoje vejo o quanto evoluí só por não ter desistido.",
    },
    {
      id: 2,
      date: "April 3, 2025",
      title: "Dia de Prova",
      subtitle: "Ansiedade e concentração",
      content: "Hoje foi dia de prova na faculdade. Acordei nervoso, revisei até os últimos minutos. Na hora, respirei fundo e tentei manter a calma. Senti que consegui aplicar bem o que estudei. Agora é esperar o resultado e torcer para que o esforço tenha valido a pena.",
    },
    {
      id: 3,
      date: "April 4, 2025",
      title: "Café com Ideias",
      subtitle: "Conversas que inspiram",
      content: "Encontrei um amigo da área de TI e acabamos trocando várias ideias sobre projetos. Ele me mostrou um app que está desenvolvendo e me deu insights para melhorar um projeto meu também. Essas conversas me mostram como estar perto de gente que compartilha dos mesmos interesses pode nos impulsionar.",
    },
    {
      id: 4,
      date: "April 5, 2025",
      title: "Dia de Monitoria",
      subtitle: "Ajudando e aprendendo",
      content: "Hoje foi dia de monitoria e pude ajudar alguns colegas com dúvidas sobre orientação a objetos. Às vezes, explicando, percebo que reforço ainda mais meu entendimento. Ver alguém entender algo com minha ajuda é uma sensação incrível.",
    },
    {
      id: 5,
      date: "April 6, 2025",
      title: "Aquela Travada no Código",
      subtitle: "Frustração temporária",
      content: "Passei a tarde tentando resolver um bug e nada funcionava. Fiquei frustrado, mas decidi sair um pouco, caminhar e voltar depois. Quando voltei, olhei o código com outros olhos e consegui resolver em 10 minutos. Aprendi que parar também faz parte do processo.",
    },
  ];  

export default function PostPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const post = mockPosts.find(p => p.id === Number(id));

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className={styles.container}>
      <article className={styles.post}>
        <span className={styles.date}>{post.date}</span>
        <h1 className={styles.title}>{post.title}</h1>
        <h2 className={styles.subtitle}>{post.subtitle}</h2>
        <p className={styles.content}>{post.content}</p>
      </article>
    </div>
  );
}