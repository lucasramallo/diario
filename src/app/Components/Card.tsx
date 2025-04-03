import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  date: string;
  title: string;
  subtitle: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ date, title, subtitle, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.date}>{date}</span>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>
      <div className={styles.cardContent}>
        <p>{content}</p>
      </div>
      <div className={styles.cardFooter}>
        <button className={styles.fullStoryButton}>FULL STORY</button>
      </div>
    </div>
  );
};

export default Card;