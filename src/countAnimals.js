const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animais = {};
  if (typeof animal === 'undefined') {
    data.species.forEach((element) => {
      animais[element.name] = element.residents.length;
    });
    return animais;
  }
  const { specie: bicho, sex = 'genero' } = animal;
  const especie = data.species.find((specie) => specie.name === bicho);
  if (sex === 'genero') {
    return especie.residents.length;
  }
  return especie.residents.filter((unico) => unico.sex === sex).length;
}

module.exports = countAnimals;
