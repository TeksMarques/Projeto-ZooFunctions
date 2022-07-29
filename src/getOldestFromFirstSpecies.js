const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const id = 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'

const funcionario = (id) => data.employees.find((employe) => employe.id === id)

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  
}
console.log(getOldestFromFirstSpecies(id))
module.exports = getOldestFromFirstSpecies;
