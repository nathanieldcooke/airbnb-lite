import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

function ReviewFormModal({ spotId, updateData, text }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span onClick={() => setShowModal(true)}>{text}</span>
            {showModal && (
                <Modal onClose={(e) => {
                    e.stopPropagation()
                    setShowModal(false)
                }}>
                    <ReviewForm spotId={spotId} updateData={updateData} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;