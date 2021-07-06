export const inRange = (value, lowerBound, upperBound) => {
  let error;
  if (value < lowerBound || value > upperBound) {
    error = `Este valor tiene que estar comprendido en el intervalo ${lowerBound} - ${upperBound}`;
  }
  return error;
};

export const isPositive = (value) => {
  let error;
  if (value < 0) {
    error = `Este valor no puede ser negativo`;
  }
  return error;
};

export const isSet = (value) => {
  let error;
  if (!value) {
    error = `Este valor no puede dejarse en blanco`;
  }
  return error;
};
