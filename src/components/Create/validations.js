export const processNotNegative = (value, setError) => {
  if (value.includes("-")) {
    setError("Este valor no puede ser negativo.");
  }
  return value;
};

export const removePeriods = (value) => {
  return value.replace(".", "");
};
