import React, {useEffect} from "react";
import {useDropzone} from "react-dropzone";
import {
  DropzoneContainer,
  FileCardsContainer,
  FileUploadContainer,
} from "./ChemicalModelStyles";
import {FileCard} from "./FileCard";
import Typography from "@material-ui/core/Typography";
import {helpTextStyles} from "./Thomas/ThomasStyles";
import {settings} from "../../config/settings";

export const FileUpload = ({
  files,
  setNewFiles,
  maxFiles = settings.MAX_MODELS,
}) => {
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
  const styles = helpTextStyles();
  return (
    <FileUploadContainer>
      <DropzoneContainer {...getRootProps({className: "dropzone"})}>
        <input {...getInputProps()} />
        {files.length === 0 ? (
          <Typography className={styles.typography}>
            Arrastrá archivos aquí o hacé click para seleccionarlos
          </Typography>
        ) : (
          <FileCardsContainer>
            {files.map((file, index) => (
              <FileCard
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFile(index);
                }}
                key={index}
                fileName={file.path}
              />
            ))}
          </FileCardsContainer>
        )}
      </DropzoneContainer>
    </FileUploadContainer>
  );
};
