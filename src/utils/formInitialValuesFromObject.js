export const formInitialValuesFromObject = (initialValues) => {
  let initialValuesToSet = {...initialValues};
  Object.keys(initialValues).forEach((key) => {
    if (initialValues[key] === null) {
      initialValuesToSet[key] = "";
    }
  });
  return initialValuesToSet;
};
