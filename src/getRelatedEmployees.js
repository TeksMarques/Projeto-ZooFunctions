const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((elemento) => elemento.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcionarios = data.employees.filter((manager) =>
    manager.managers.includes(managerId));
  const listaFuncionarios = funcionarios.map(
    (elemento) => `${elemento.firstName} ${elemento.lastName}`,
  );
  return listaFuncionarios;
}

module.exports = { isManager, getRelatedEmployees };
