export const allNullKeys = (obj) => {
  return Object.keys(obj)
    .map((key) => {
      return {[key]: null};
    })
    .reduce((prev, cur) => {
      return {...prev, ...cur};
    });
};
