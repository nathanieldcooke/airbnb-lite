import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingForm from './BookingForm';

function BookingFormModal( { updateData, text } ) {
    const [showModal, setShowModal] = useState(false);

    console.log("THis is the BOOOOOOKING:", updateData)

    return (
        <>
            <span onClick={() => setShowModal(true)}>{text}</span>
            {showModal && (
                <Modal onClose={(e) => {
                    e.stopPropagation()
                    setShowModal(false)
                }}>
                    <BookingForm updateData={updateData} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default BookingFormModal;