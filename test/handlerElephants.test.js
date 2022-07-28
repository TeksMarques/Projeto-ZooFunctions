const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Total de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para o argumento name', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Para a média da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Para a sua localização dos elefantes dentro do zoologico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Para o numero de popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('Para os dias de visita aos elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Para quando não for passado parametro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Para quando for passado um objeto vazio', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('teresa')).toBeNull();
  });
});
