const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((elemento) =>
    [elemento.firstName, elemento.lastName].includes(employeeName));
}

module.exports = getEmployeeByName;
