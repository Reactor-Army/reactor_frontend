const NO_LIMIT = "No regulado";

export const spillLimit = (limit) => {
  if (!limit) {
    return NO_LIMIT;
  }
  return `${limit} L`;
};
