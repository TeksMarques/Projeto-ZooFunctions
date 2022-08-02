const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function getAnimais(dia) {
  // console.log(species)
  const animals = [];
  species.forEach((s) => {
    if (s.availability.includes(dia)) {
      animals.push(s.name);
    }
  });
  return animals;
}

function diasAbertos(dia) {
  const dias = Object.keys(hours);
  if (dias.includes(dia)) {
    if (dia === 'Monday') {
      return {
        officeHour: 'CLOSED',
        exhibition: '',
      };
    }
    return {
      officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
      exhibition: getAnimais(dia),
    };
  }
  return undefined;
}

function getDiasByAnimal(animal) {
  let dias = '';
  species.forEach((s) => {
    if (s.name.includes(animal)) {
      dias = s.availability;
    } else {
      return undefined;
    }
  });
  return dias;
}

function verificacao(schedule) {
  if (Object.keys(hours).includes(schedule)) {
    diasAbertos(schedule);
  } else {
    getDiasByAnimal(schedule);
  }
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  verificacao(scheduleTarget);
}

module.exports = getSchedule;
