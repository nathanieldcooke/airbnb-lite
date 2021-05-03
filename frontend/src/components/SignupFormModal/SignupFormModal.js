import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span className='logged-in-span' onClick={() => setShowModal(true)}>SignUp</span>
            {showModal && (
                <Modal onClose={(e) => {
                    e.stopPropagation()
                    setShowModal(false)}
                }>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;