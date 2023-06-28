import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalA = ({ show, onHide }) => {
  

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>All Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Content of the All Contacts modal */}
        <div>
            <h3>Contact Name</h2>
            <p>Contact No:</p>
            <p>Full Address:</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;