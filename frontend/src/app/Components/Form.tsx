'use client';

import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { FileUpload, FileUploadHandlerEvent } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import styles from '../styles/Form.module.css';
import { Image } from 'primereact/image';
import InputComponent from './InputComponent';

interface FormData {
  titulo: string;
  subtitulo: string;
  conteudo: string;
  imagem: File | null;
  imagemURL: string | null;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    titulo: '',
    subtitulo: '',
    conteudo: '',
    imagem: null,
    imagemURL: null,
  });

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
    // Aqui você pode enviar os dados para a API, etc.
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      <div className={styles.campo}>
        <label htmlFor="titulo" className={styles.rotulo}>Título</label>
        <InputComponent
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="subtitulo" className={styles.rotulo}>Subtítulo</label>
        <InputComponent
          id="subtitulo"
          name="subtitulo"
          value={formData.subtitulo}
          onChange={handleInputChange}
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

      <div className={styles.campo}>
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
  );
};

export default Form;
