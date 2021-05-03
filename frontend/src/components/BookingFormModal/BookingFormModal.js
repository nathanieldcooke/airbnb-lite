import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BookingForm from './BookingForm';

function BookingFormModal( { updateData, text } ) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='span-booking-modal is-logged-in' onClick={() => setShowModal(true)}>{text}</button>
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