const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  let final = ''; let escolha = ''; let max = 0;
  data.employees.find((element) => {
    escolha = element.id === id ? element.responsibleFor[0] : '';
    return escolha;
  });
  data.species.filter((animal) => {
    if (animal.id === escolha) {
      animal.residents.forEach((res) => {
        if (res.age > max) {
          max = res.age;
          final = Object.values(res);
        }
      });
    }
    return final;
  });
  return final;
}

module.exports = getOldestFromFirstSpecies;
