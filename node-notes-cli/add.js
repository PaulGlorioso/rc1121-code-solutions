const add = (object, note) => {
  const idNum = object.nextId;
  object.notes[idNum] = note;
  object.nextId++;
  return object;
};
module.exports = add;
