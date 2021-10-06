export const inRange = (value, lowerBound, upperBound) => {
  if (value === "") return;
  if (value < lowerBound || value > upperBound) {
    return `Este valor tiene que estar comprendido en el intervalo ${lowerBound} - ${upperBound}`;
  }
};

export const isPositive = (value, allowZero = false) => {
  if (value === "") return;
  if (!allowZero) {
    if (value <= 0) {
      return `Este valor debe ser mayor a cero`;
    }
  } else {
    if (value < 0) {
      return `Este valor debe ser mayor o igual a cero`;
    }
  }
};

export const isSet = (value) => {
  if (value === "" || value === null) {
    return `Este valor no puede dejarse en blanco`;
  }
};

export const isInteger = (value) => {
  if (value === "" || value === null) return;
  if (!Number.isInteger(value)) {
    return `Este valor debe ser entero`;
  }
};

export const isValidPassword = (value) => {
  const minimumPasswordLength = 8;
  if (!value || value.length < minimumPasswordLength) {
    return `La contraseña debe tener al menos 8 caracteres`;
  }
};

export const isValidEmail = (value) => {
  const regEx = new RegExp(
    //eslint-disable-next-line
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
  );
  if (!value || !regEx.test(value)) {
    return "El mail ingresado no es válido";
  }
};
