export const idFromName = (name, entities, key) => {
  // Searches a list of entities (adsorbates / adsorbents) for the passed on name
  // returns the ID of the found entity or null if not found
  for (const entity of entities) {
    if (entity[key].toLowerCase() === name) {
      return entity.id;
    }
  }
  return null;
};
