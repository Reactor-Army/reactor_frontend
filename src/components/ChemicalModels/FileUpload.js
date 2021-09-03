import React, {useEffect} from "react";
import {useDropzone} from "react-dropzone";
import {
  DropzoneContainer,
  FileCardsContainer,
  FileUploadContainer,
} from "./ChemicalModelStyles";
import {FileCard} from "./FileCard";

export const FileUpload = ({files, setNewFiles}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    maxFiles: 3 - files.length,
    multiple: true,
    disabled: files.length === 3,
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setNewFiles((prev) => [...prev, ...acceptedFiles]);
    }
  }, [acceptedFiles]);

  const deleteFile = (i) => {
    // Remove the element at position i
    setNewFiles((prev) => prev.filter((item, index) => index !== i));
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
        {files.map((f, i) => (
          <FileCard onClick={() => deleteFile(i)} key={i} fileName={f.path} />
        ))}
      </FileCardsContainer>
    </>
  );
};
