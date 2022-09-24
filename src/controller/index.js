var characters = [
  { id: 1, name: "MARTIN", apellido: "FIORI", edad: 23, wand: {} },
  { id: 2, name: "MARTIN", apellido: "FIORI", edad: 23, wand: {} },
  { id: 3, name: "MARTIN", apellido: "FIORI", edad: 23, wand: {} },
];

module.exports = {
  create: function (name, apellido, edad) {
    const id = characters.length ? characters[characters.length - 1].id + 1 : 1;

    characters.push({ id, name, apellido, edad, wand: {} });
    // console.log(characters);
  },

  read: function () {
    return characters;
  },

  delete: function (id) {
    // characters = characters.filter((el) => el.id !== parseInt(id));
    let filter = characters.filter((el) => el.id != parseInt(id));
    characters = filter;
    return characters;
  },

  upload: function (id, body) {
    //MAP => ME DEVUELVE UN ARRAY
    if (id) {
      characters = characters.map((el) =>
        el.id === parseInt(id) ? { ...el, ...body } : el
      );
    } else {
      throw new Error("no llego un id");
    }
    console.log(characters);
    return characters;
  },
};
