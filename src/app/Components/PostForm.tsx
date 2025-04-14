// src/Components/PostForm.tsx
import styles from "../styles/PostForm.module.css";

interface PostFormProps {
  onOpenDialog: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onOpenDialog }) => {
  return (
    <div className={styles.formContainer}>
      <textarea
        className={styles.textarea}
        placeholder="Escreva seu post aqui..."
        onClick={onOpenDialog}
        readOnly
      />
    </div>
  );
};

export default PostForm;
