// src/app/Components/Card.tsx
import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

interface CardProps {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ id, date, title, subtitle, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.date}>{date}</span>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>
      <div className={styles.cardContent}>
        <p>{content.length > 120 ? `${content.substring(0, 120)}...` : content}</p>
      </div>
      <div className={styles.cardFooter}>
        <Link href={`/post?id=${id}`} className={styles.fullStoryButton}>
          FULL STORY
        </Link>
      </div>
    </div>
  );
};

export default Card;