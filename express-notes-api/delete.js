const del = (object, noteId) => {
  delete object.notes[`${noteId}`];
  return object;
};
module.exports = del;
