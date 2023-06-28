import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalA = ({ show, onHide }) => {
  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>All Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;