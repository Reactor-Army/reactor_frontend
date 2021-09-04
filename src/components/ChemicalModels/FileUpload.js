import React, {useEffect} from "react";
import {useDropzone} from "react-dropzone";
import {
  DropzoneContainer,
  FileCardsContainer,
  FileUploadContainer,
} from "./ChemicalModelStyles";
import {FileCard} from "./FileCard";

export const FileUpload = ({files, setNewFiles, maxFiles = 3}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    maxFiles: maxFiles - files.length,
    multiple: true,
    disabled: files.length === maxFiles,
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setNewFiles((prev) => [...prev, ...acceptedFiles]);
    }
  }, [acceptedFiles]);

  const deleteFile = (fileToRemoveIndex) => {
    // Remove the element at position i
    setNewFiles((prev) =>
      prev.filter((item, index) => index !== fileToRemoveIndex),
    );
  };

  return (
    <>
      <FileUploadContainer>
        <DropzoneContainer {...getRootProps({className: "dropzone"})}>
          <input {...getInputProps()} />
          <p>Arrastrá archivos aquí o hacé click para seleccionarlos</p>
        </DropzoneContainer>
      </FileUploadContainer>
      <FileCardsContainer>
        {files.map((file, index) => (
          <FileCard
            onClick={() => deleteFile(index)}
            key={index}
            fileName={file.path}
          />
        ))}
      </FileCardsContainer>
    </>
  );
};
