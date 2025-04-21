'use client';

import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload, FileUploadHandlerEvent } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import styles from '../styles/Form.module.css';
import { Image } from 'primereact/image';
import InputComponent from './InputComponent';
import { useStore } from '../store/useStore';
import { Message } from 'primereact/message';

interface FormData {
  titulo: string;
  subtitulo: string;
  conteudo: string;
  imagem: File | null;
  imagemURL: string | null;
}

interface props {
  closeDialog: () => void;
}

const Form: React.FC<props> = ({ closeDialog }) => {
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    subtitulo: '',
    conteudo: '',
    imagem: null,
    imagemURL: null,
  });
  const [invalidTitle, setInvalidTitle] = useState(false)
  const [invalidSubtitle, setInvalidSubtitle] = useState(false)
  const [invalidImage, seInvalidImage] = useState(false)

  const { successSubmit, setSuccess } = useStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpload = (event: FileUploadHandlerEvent) => {
    const file = event.files[0];
    const objectURL = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      imagem: file,
      imagemURL: objectURL,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);

    if (formData.titulo && formData.subtitulo && formData.imagem) {
      setInvalidTitle(false);
      setInvalidSubtitle(false);
      seInvalidImage(false);
    }

    if (!formData.titulo && !formData.subtitulo && !formData.imagem) {
      setInvalidTitle(true);
      setInvalidSubtitle(true);
      seInvalidImage(true);
    }
    
    if(!formData.titulo) {
      setInvalidTitle(true);
      return;
    }

    if(!formData.subtitulo) {
      setInvalidSubtitle(true);
      return;
    }

    if(!formData.imagem) {
      seInvalidImage(true);
      return;
    }

    setSuccess();
    closeDialog();
  };

  console.log(formData);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.campo}>
          <label htmlFor="titulo" className={styles.rotulo}>Título</label>
          <InputComponent
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
            invalid={invalidTitle}
            textError='Título obrigatório'
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="subtitulo" className={styles.rotulo}>Subtítulo</label>
          <InputComponent
            id="subtitulo"
            name="subtitulo"
            value={formData.subtitulo}
            onChange={handleInputChange}
            invalid={invalidSubtitle}
            textError='Subtítulo obrigatório'
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="conteudo" className={styles.rotulo}>Conteúdo</label>
          <InputTextarea
            id="conteudo"
            name="conteudo"
            value={formData.conteudo}
            onChange={handleInputChange}
            rows={5}
            className="w-full"
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#c2c2c2';
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#c2c2c2';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#c2c2c2';
            }}
          />
        </div>

        <div className="flex flex-wrap align-items-center mb-3 gap-2">
          <FileUpload
            name="imagem"
            mode="basic"
            auto
            customUpload
            uploadHandler={handleUpload}
            chooseLabel="Selecionar Imagem"
            accept="image/*"
            chooseOptions={{
              style: {
                backgroundColor: '#131313',
                color: 'white',
                border: '1.5px solid #131313',
              },
            }}
          />
          {invalidImage && <Message severity="error" text={"Imagem Obrigatória!"} />}
        </div>

        {formData.imagemURL && (
          <div className={styles.campo}>
            <Image src={formData.imagemURL} alt="Imagem selecionada" width="100%" preview />
          </div>
        )}

        <Button 
          label="Enviar" 
          icon="pi pi-check" 
          type="submit" 
          style={{ backgroundColor: '#131313', color: 'white', border: '1.5px solid #131313' }}
        />
      </form>
    </>
  );
};

export default Form;
