import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DisplayImages from './DisplayImages.js';

function DisplayImagesModal( {spot} ) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <span className='logged-in-span' onClick={() => setShowModal(true)}>More Images</span>
            {showModal && (
                <Modal onClose={(e) => {
                    e.stopPropagation()
                    setShowModal(false)
                }
                }>
                    <DisplayImages spot={spot} />
                </Modal>
            )}
        </>
    );
}

export default DisplayImagesModal;