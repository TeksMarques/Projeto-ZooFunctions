const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalData = data.species.find((resident) => resident.name === animal);
  const idadeMinima = animalData.residents.every(
    (residentAnimal) => residentAnimal.age >= age,
  );
  return idadeMinima;
}

module.exports = getAnimalsOlderThan;
