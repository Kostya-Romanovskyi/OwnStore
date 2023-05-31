import { useState } from 'react';
import { Modal } from '@mui/material';
import YouTubeTrailer from '../YouTubeTrailer/YouTubeTrailer';
import { ModalContainer, OpenButton, CloseButton, Plug, Wrapp } from './Modal.styled';
import { FaPlay } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { videosTrailer } from '../../Redux/Slices/VideosSlice';
import { useSelector } from 'react-redux';



const TrailerModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const trailer = useSelector(videosTrailer)

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
                    {trailer.video !== null ?
                        <>
                            <YouTubeTrailer />

                            <CloseButton variant="contained" color="primary" onClick={handleClose}>
                                <AiOutlineClose style={{ color: '#ffffff', width: 32, heigh: 32 }} size={32} />
                            </CloseButton>

                        </>
                        : <Wrapp>
                            <CloseButton variant="contained" color="primary" onClick={handleClose}>
                                <AiOutlineClose style={{ color: '#ffffff', width: 32, heigh: 32 }} size={32} />
                            </CloseButton>
                            <Plug>We haven`t trailer of this movie</Plug>

                        </Wrapp>
                    }


                </ModalContainer>

            </Modal>

        </div>
    );
};

export default TrailerModal;