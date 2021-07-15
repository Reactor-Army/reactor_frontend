export const allNullKeys = (obj) => {
  return Object.keys(obj)
    .map((k) => {
      return {[k]: null};
    })
    .reduce((prev, cur) => {
      return {...prev, ...cur};
    });
};
