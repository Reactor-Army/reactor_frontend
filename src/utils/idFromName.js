export const idFromName = (name, entities, key) => {
  // Searches a list of entities (adsorbates / adsorbents) for the passed on name
  // returns the ID of the found entity or null if not found
  if (name) {
    for (const entity of entities) {
      if (entity[key].toLowerCase() === name.toLowerCase()) {
        return entity.id;
      }
    }
  }
  return null;
};

export const nameFromId = (id, entities, key) => {
  console.log(entities);
  if (!entities || entities.length === 0) {
    return;
  }
  const filtered = entities.filter((entity) => entity.id === parseInt(id));
  return filtered[0][key];
};
