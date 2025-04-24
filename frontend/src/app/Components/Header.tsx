import React from "react";
import styles from "../styles/Header.module.css";
import ButtonComponent from "./ButtonComponent";

interface PostFormProps {
  onOpenDialog: () => void;
}

const Header: React.FC<PostFormProps> = ({ onOpenDialog }) => {
  const handleClick = () => {
    onOpenDialog()
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.fakeTextarea}>
        <ButtonComponent title="New post" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Header;
