import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DemoSignupForm from './DemoSignupForm';

function DemoSignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span onClick={() => setShowModal(true)}>Demo SignUp</span>
            {showModal && (
                <Modal onClose={(e) => {
                    e.stopPropagation()
                    setShowModal(false)
                }
                }>
                    <DemoSignupForm />
                </Modal>
            )}
        </>
    );
}

export default DemoSignupFormModal;