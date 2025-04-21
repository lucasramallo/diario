import React from "react";
import { Dialog } from 'primereact/dialog';
import styles from "../styles/DialogComponent.module.css";
import Form from "./Form";

interface dialogComponentProps {
    visible: boolean;
    onHide: () => void;
    closeDialog: () => void;
}

const dialogComponent: React.FC<dialogComponentProps> = ({ visible, onHide, closeDialog }) => {
    const headerElement =
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="font-bold white-space-nowrap" ></span>
        </div>

    return (
        <Dialog visible={visible}
            header={headerElement}
            style={{ width: '50rem' }}
            onHide={onHide}
        >
            <Form closeDialog={closeDialog}/>        
        </Dialog>
    )
}

export default dialogComponent;