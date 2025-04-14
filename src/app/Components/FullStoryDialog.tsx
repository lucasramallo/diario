// src/app/Components/FullStoryDialog.tsx
import React from "react";
import styles from "./FullStoryDialog.module.css";

interface FullStoryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  content: string;
  date: string;
}

const FullStoryDialog: React.FC<FullStoryDialogProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  content,
  date,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <span className={styles.date}>{date}</span>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default FullStoryDialog;
