const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const pessoas = { child: 0, adult: 0, senior: 0 };
  entrants.filter((elemento) => {
    if (elemento.age < 18) {
      pessoas.child += 1;
    } else if (elemento.age >= 18 && elemento.age < 50) {
      pessoas.adult += 1;
    } else {
      pessoas.senior += 1;
    }
    return pessoas;
  });
  return pessoas;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);
  let calculo = 0;
  calculo += count.child * data.prices.child;
  calculo += count.adult * data.prices.adult;
  calculo += count.senior * data.prices.senior;
  return calculo;
}

module.exports = { calculateEntry, countEntrants };
