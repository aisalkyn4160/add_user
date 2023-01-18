import React from 'react';
import classes from "./ErrorModal.module.css";
import {Card} from "./Card";
import {Button} from "./Button";

const DeleteModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={() => props.confirmModal(props.id)}>Да</Button>
          <Button onClick={props.hideModal}>Нет</Button>
        </footer>
      </Card>
    </div>
  );
};

export default DeleteModal;
