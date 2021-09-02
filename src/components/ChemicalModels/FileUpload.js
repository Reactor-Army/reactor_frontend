import React, {useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";
import {FileUploadContainer} from "./ChemicalModelStyles";

export const FileUpload = () => {
  const [files, setNewFiles] = useState([]);
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

  return (
    <>
      <FileUploadContainer>
        <div {...getRootProps({className: "dropzone"})}>
          <input {...getInputProps()} />
          <p>Drag and drop some files here, or click to select files</p>
        </div>
      </FileUploadContainer>
      <ul>
        {files.map((f, i) => (
          <li key={i}>{f.path}</li>
        ))}
      </ul>
    </>
  );
};
