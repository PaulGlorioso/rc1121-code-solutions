const read = object => {
  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
};
module.exports = read;
