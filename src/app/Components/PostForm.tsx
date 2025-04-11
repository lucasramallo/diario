// src/Components/PostForm.tsx
import React, { useState } from "react";
import styles from "../styles/PostForm.module.css";

const PostForm: React.FC = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      console.log("Texto enviado:", text);
      setText("");
    }
  };

  return (
    <div className={styles.formContainer}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escreva seu post aqui..."
      />
      <button className={styles.button} onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};

export default PostForm;
