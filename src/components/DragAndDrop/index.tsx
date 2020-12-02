/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useRef, useState } from 'react';
import Close from '../../assets/close.svg';
import DragFile from '../../assets/dragfile.svg';
import DragFileRelease from '../../assets/dragfilerelease.svg';
import { useUpdateEffect } from '../../hooks';
import { CloseButton, Container } from '../../styles/components/DragAndDrop';
import { toast } from 'react-toastify';

const validExtension = ['png'];

interface DragAndDropsProps {
  onUpload?: any;
  file: any;
  setFile: Function;
}

const DragAndDrop: React.FC<DragAndDropsProps> = ({ onUpload, file, setFile }) => {
  const drop = useRef(null);
  const drag = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
    drop.current.addEventListener('dragenter', handleDragEnter);
    drop.current.addEventListener('dragleave', handleDragLeave);

    return () => {
      drop.current.removeEventListener('dragover', handleDragOver);
      drop.current.removeEventListener('drop', handleDrop);
      drop.current.removeEventListener('dragenter', handleDragEnter);
      drop.current.removeEventListener('dragleave', handleDragLeave);
    };
  }, []);

  const validateFile = (fileName: string): boolean => {
    const arrayFile = fileName.split('.');
    const extension = arrayFile.pop();
    return validExtension.includes(extension);
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    const { files } = e.dataTransfer;

    if (files && files.length) {
      if (!validateFile(files[0].name)) {
        return toast.error('😐 Select a image with .png extension', {
          autoClose: false,
          position: 'top-center',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
      const reader = new FileReader();
      reader.onload = e => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target !== drag.current) {
      setDragging(true);
    }
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target === drag.current) {
      setDragging(false);
    }
  };

  const onClickClose = () => {
    setFile(false);
  };

  return (
    <>
      <Container ref={drop} dragging={dragging}>
        {file ? (
          <>
            <img src={file} />
            <CloseButton onClick={onClickClose}>
              <Close />
            </CloseButton>
          </>
        ) : dragging ? (
          <div className='placeholder' ref={drag}>
            <DragFileRelease />
            Drop that file
          </div>
        ) : (
          <div className='placeholder'>
            <DragFile />
            Drag a image here
          </div>
        )}
      </Container>
    </>
  );
};

export { DragAndDrop };
