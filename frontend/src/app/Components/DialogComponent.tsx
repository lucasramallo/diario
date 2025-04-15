import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from 'primereact/avatar';
import styles from "../styles/DialogComponent.module.css";

interface dialogComponentProps {
    visible: boolean;
    onHide: () => void;
}

const dialogComponent: React.FC<dialogComponentProps> = ({ visible, onHide }) => {

    const [nome, setNome] = useState("");

    const headerElement =
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <Avatar icon="pi pi-user" shape="circle" />
            <span className="font-bold white-space-nowrap" ></span>
            {/* <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className={styles.inputNome}
            /> */}
        </div>

    const footerContent = (
        <div>
            <Button label="Enviar" icon="pi pi-check" onClick={onHide} autoFocus />
        </div>
    );

    return (
        <Dialog visible={visible}
            header={headerElement}
            footer={footerContent}
            style={{ width: '50rem' }}
            onHide={onHide}>
            <textarea
                className={styles.insidetextarea}
                placeholder="Escreva algo interessante aqui..."
            />
        </Dialog>
    )
}

export default dialogComponent;