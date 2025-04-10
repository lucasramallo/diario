import React from "react";
import Card from "../Components/Card";
import styles from "../styles/Home.module.css";
import MyButton from "../Components/Button";

interface Post {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  content: string;
}

const Home: React.FC = () => {
  // Dados mockados
  const posts: Post[] = [
    {
      id: 1,
      date: "April 24, 2017",
      title: "SED MAGNA",
      subtitle: "IPSUM FAUCIBUS",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },
    {
      id: 2,
      date: "April 22, 2017",
      title: "PRIMIS EGET",
      subtitle: "IMPERDIET LOREM",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },
    {
      id: 3,
      date: "April 24, 2017",
      title: "SED MAGNA",
      subtitle: "IPSUM FAUCIBUS",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },
    {
      id: 4,  
      date: "April 22, 2017",
      title: "PRIMIS EGET",
      subtitle: "IMPERDIET LOREM",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },    {
      id: 5,
      date: "April 24, 2017",
      title: "SED MAGNA",
      subtitle: "IPSUM FAUCIBUS",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },
    {
      id: 6,
      date: "April 22, 2017",
      title: "PRIMIS EGET",
      subtitle: "IMPERDIET LOREM",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },
    {
      id: 7,
      date: "April 24, 2017",
      title: "SED MAGNA",
      subtitle: "IPSUM FAUCIBUS",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },
    {
      id: 8,  
      date: "April 22, 2017",
      title: "PRIMIS EGET",
      subtitle: "IMPERDIET LOREM",
      content:
        "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    },
    // Adicione mais posts conforme necessário
  ];

  return (
    <div className={styles.container}>
      <MyButton />
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.cardWrapper}>
            <Card
              date={post.date}
              title={post.title}
              subtitle={post.subtitle}
              content={post.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;