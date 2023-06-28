import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import ModalA from './modals/ModalA';
import ModalB from './modals/ModalB';

const Problem2 = () => {

    const [modalA, setModalA] = useState(false);
    const [modalB, setModalB] = useState(false);

    const handleShowModalA = () => setModalA(!modalA);
    const handleShowModalB = () => setModalB(!modalB);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleShowModalA}>All Contacts</button>

                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleShowModalB}>US Contacts</button>
                </div>

                <ModalA show={modalA} onHide={handleShowModalA}/>
                
                <ModalB show={modalB} onHide={handleShowModalB}/>
                    

            </div>

        </div>

    );
};

export default Problem2;