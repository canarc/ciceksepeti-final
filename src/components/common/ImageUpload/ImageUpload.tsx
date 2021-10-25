import { Typography, Box } from '@mui/material';
import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container } from './styles';
import UploadImage from '../../../assets/Upload.png';
import { toast } from 'react-toastify';
import { toastConfig } from '../../../constants/Toast';
import Fileservice from '../../../redux/services/fileService/api';

type ImageUploadProps = {
  onUpload: (url: string) => void;
};

const ImageUpload: FC<ImageUploadProps> = ({ onUpload }) => {
  const onDrop = useCallback((files) => {
    if (files.length > 1) toast.error('Lütfen tek bir resim yükleyin', toastConfig);
    else if (files[0].size > 400000) toast.error('Lütfen maksimum 400kb boyutunda bir dosya yükleyin', toastConfig);
    else {
      Fileservice.UploadImage(files[0]).then((url) => onUpload(url!));
    }

    acceptedFiles.length = 0;
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/jpeg, image/jpg, image/png' });

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} />

      {isDragActive ? (
        <Typography marginTop="1.2rem" fontSize="1.4rem" lineHeight="1.5rem" textAlign="center">
          <b>Buraya bırak</b>
        </Typography>
      ) : (
        <>
          <img style={{ width: '3rem' }} src={UploadImage} alt="uploadIcon" />
          <Typography marginTop="1.2rem" fontSize="1.4rem" lineHeight="1.5rem" textAlign="center">
            <b>Sürükleyip bırakarak yükle</b>
            <br />
            veya
          </Typography>
          <Box marginTop="0.5rem" width="12.2rem" height="3rem" borderRadius="1.5rem" bgcolor="#F4F4F4" fontSize="1.5rem" color="#b1b1b1" lineHeight="2.3rem" paddingTop="0.35rem" textAlign="center">
            Görsel Seçin
          </Box>
          <Typography fontSize="1.2rem" lineHeight="1.4rem" color="#b1b1b1" marginTop="1rem">
            PNG ve JPEG Dosya boyutu: max. 100kb
          </Typography>
        </>
      )}
    </Container>
  );
};

export default ImageUpload;
