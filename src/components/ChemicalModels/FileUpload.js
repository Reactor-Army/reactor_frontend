import React, {useEffect} from "react";
import {useDropzone} from "react-dropzone";
import {FileUploadContainer} from "./ChemicalModelStyles";
import {FileCard} from "./FileCard";

export const FileUpload = ({files, setNewFiles}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    maxFiles: 3 - files.length,
    multiple: true,
    disabled: files.length === 3,
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      console.log("2ow");
      setNewFiles((prev) => [...prev, ...acceptedFiles]);
    }
  }, [acceptedFiles]);

  const deleteFile = (i) => {
    setNewFiles((prev) => prev.filter((item, index) => index !== i));
  };

  return (
    <>
      <FileUploadContainer>
        <div {...getRootProps({className: "dropzone"})}>
          <input {...getInputProps()} />
          <p>Arrastrá archivos aquí o hacé click para seleccionarlos</p>
        </div>
      </FileUploadContainer>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        {files.map((f, i) => (
          <FileCard onClick={() => deleteFile(i)} key={i} fileName={f.path} />
        ))}
      </div>
    </>
  );
};
