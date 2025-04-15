import React from "react";
import styles from "../styles/PostForm.module.css";

interface PostFormProps {
  onOpenDialog: () => void;
}

const Header: React.FC<PostFormProps> = ({onOpenDialog}) => {
  const handleClick = () => {
    onOpenDialog()
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.fakeTextarea}>
        <button className={styles.innerButton} onClick={handleClick}>
          New Post
        </button>
      </div>
    </div>
  );
};

export default Header;
