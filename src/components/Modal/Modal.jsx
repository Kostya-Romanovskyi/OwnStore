import { useState } from 'react';
import { Modal } from '@mui/material';
import YouTubeTrailer from '../YouTubeTrailer/YouTubeTrailer';
import { ModalContainer, OpenButton, CloseButton } from './Modal.styled';
import { FaPlay } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'


const TrailerModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <OpenButton variant="contained" color="primary" onClick={handleOpen}>
                <FaPlay style={{ color: '#ffffff' }} size={32} />
            </OpenButton>
            <Modal open={isOpen} onClose={handleClose}>
                <ModalContainer>

                    <YouTubeTrailer />

                    <CloseButton variant="contained" color="primary" onClick={handleClose}>
                        <AiOutlineClose style={{ color: '#ffffff', width: 32, heigh: 32 }} size={32} />
                    </CloseButton>
                </ModalContainer>

            </Modal>
        </div>
    );
};

export default TrailerModal;