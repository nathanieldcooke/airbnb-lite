import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span className='logged-in-span' onClick={() => setShowModal(true)}>Log In</span>
            {showModal && (
                <Modal onClose={(e) => {
                    e.stopPropagation()
                    setShowModal(false)
                }}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;