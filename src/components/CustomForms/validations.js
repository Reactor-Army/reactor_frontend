export const processNotNegative = (value, setError) => {
  if (value.includes("-")) {
    setError("Este valor no puede ser negativo.");
  }
  return value;
};

export const removePeriods = (value) => {
  return value.replace(".", "");
};

export const phInRange = (value, setError) => {
  const lowerBound = 1;
  const upperBound = 14;
  if (value < lowerBound || value > upperBound) {
    setError(
      `Este valor tiene que estar comprendido en el intervalo ${lowerBound} - ${upperBound}`,
    );
  }
  return value;
};

export const filterBlank = (errorValues) => {
  return Object.keys(errorValues).some((key) => {
    return errorValues[key] !== undefined && errorValues[key] !== null;
  });
};
