const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animais = {}; let total = 0;
  if (typeof animal === 'undefined') {
    data.species.forEach((element) => { animais[element.name] = element.residents.length; });
    return animais;
  } if (Object.keys(animal).length === 1) {
    const { specie } = animal;
    data.species.find((element) => {
      if (element.name === specie) {
        total = element.residents.length;
      }
      return total;
    });
    return total;
  }
  const { specie, sex } = animal;
  const animalescolhidao = data.species.find((element) => specie === element.name);
  const final = animalescolhidao.residents.filter((aff) => aff.sex === sex);
  total = (final.length); return total;
}

module.exports = countAnimals;
