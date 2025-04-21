'use client';

import React, { useState, useRef, useEffect } from "react";
import Card from "./Components/Card";
import styles from "./styles/Home.module.css";
import Header from "./Components/Header";
import DialogComponent from "./Components/DialogComponent";
import { useStore } from './store/useStore';
import { Toast } from "primereact/toast";

interface Post {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
}

const Home: React.FC = () => {

  const [dialogVisible, setDialogVisible] = useState(false);

  const toast = useRef<any>(null);
  const { successSubmit, setSuccess } = useStore();

  const openDialog = () => {
      setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };


  const posts: Post[] = [
    {
      id: 1,
      date: "April 2, 2025",
      title: "Primeiro Contato com a Programação",
      subtitle: "Descobrindo um novo mundo",
      content:
        "Tudo começou quando decidi fazer um curso online gratuito. Mesmo sem saber nada, fui me desafiando diariamente, resolvendo exercícios e criando pequenos projetos. No início, tudo parecia um bicho de sete cabeças. Mas a curiosidade me mantinha motivado. Hoje vejo o quanto evoluí só por não ter desistido.",
        image: "https://html5up.net/uploads/demos/massively/images/pic01.jpg",
    },
    {
      id: 2,
      date: "April 3, 2025",
      title: "Dia de Prova",
      subtitle: "Ansiedade e concentração",
      content:
        "Hoje foi dia de prova na faculdade. Acordei nervoso, revisei até os últimos minutos. Na hora, respirei fundo e tentei manter a calma. Senti que consegui aplicar bem o que estudei. Agora é esperar o resultado e torcer para que o esforço tenha valido a pena.",
        image: "https://html5up.net/uploads/demos/massively/images/pic01.jpg",
    },
    {
      id: 3,
      date: "April 4, 2025",
      title: "Café com Ideias",
      subtitle: "Conversas que inspiram",
      content:
        "Encontrei um amigo da área de TI e acabamos trocando várias ideias sobre projetos. Ele me mostrou um app que está desenvolvendo e me deu insights para melhorar um projeto meu também. Essas conversas me mostram como estar perto de gente que compartilha dos mesmos interesses pode nos impulsionar.",
        image: "https://html5up.net/uploads/demos/massively/images/pic01.jpg",
    },
    {
      id: 4,
      date: "April 5, 2025",
      title: "Dia de Monitoria",
      subtitle: "Ajudando e aprendendo",
      content:
        "Hoje foi dia de monitoria e pude ajudar alguns colegas com dúvidas sobre orientação a objetos. Às vezes, explicando, percebo que reforço ainda mais meu entendimento. Ver alguém entender algo com minha ajuda é uma sensação incrível.",
        image: "https://html5up.net/uploads/demos/massively/images/pic01.jpg",
    },
    {
      id: 5,
      date: "April 6, 2025",
      title: "Aquela Travada no Código",
      subtitle: "Frustração temporária",
      content:
        "Passei a tarde tentando resolver um bug e nada funcionava. Fiquei frustrado, mas decidi sair um pouco, caminhar e voltar depois. Quando voltei, olhei o código com outros olhos e consegui resolver em 10 minutos. Aprendi que parar também faz parte do processo.",
        image: "https://html5up.net/uploads/demos/massively/images/pic01.jpg",
    },
  ];

  const showSuccessToast = () => {
    toast.current?.show({
      severity: 'success',
      summary: 'Tudo certo!',
      detail: 'Seu post foi postado com sucesso!',
      life: 5000
    });
  };

  useEffect(() => {
    if (successSubmit) {
      showSuccessToast();
    }
  }, [successSubmit]);

  return (
    <div className={styles.container}>
      <Toast ref={toast} />
      <Header onOpenDialog={openDialog} />

      <DialogComponent visible={dialogVisible} onHide={closeDialog} closeDialog={closeDialog}/>
      
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.cardWrapper}>
            <Card
              id={post.id}
              date={post.date}
              title={post.title}
              content={post.content}
              image={post.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;