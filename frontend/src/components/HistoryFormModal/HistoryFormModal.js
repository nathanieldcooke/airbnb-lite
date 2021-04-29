import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import HistoryForm from './HistoryForm';

function HistoryFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span onClick={() => setShowModal(true)}>My History</span>
            {showModal && (
                <Modal 
                onClose={(e) => {
                    e.stopPropagation()
                    setShowModal(false)
                }}>
                    <HistoryForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default HistoryFormModal;