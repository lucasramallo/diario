import React, { useState } from "react";
import styles from "./Card.module.css";
import FullStoryDialog from "./FullStoryDialog";

interface CardProps {
  date: string;
  title: string;
  subtitle: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ date, title, subtitle, content }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
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
          <button className={styles.fullStoryButton} onClick={() => setIsDialogOpen(true)}>
            FULL STORY
          </button>
        </div>
      </div>

      <FullStoryDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={title}
        subtitle={subtitle}
        content={content}
        date={date}
      />
    </>
  );
};

export default Card;
