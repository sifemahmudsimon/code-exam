import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalB = ({ show, onHide }) => {



  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>US Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close Modal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalB;