const update = (object, key, note) => {
  object.notes[key] = note;
  return object;
};
module.exports = update;
