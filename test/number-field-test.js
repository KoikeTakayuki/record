const should = require('should');
const numberField = require('../index').numberField;

describe('numberField', function () {
  it('should return an object', function () {
    numberField('test', 'name').should.be.an.Object();
  });

  it('should return an object which has 10 keys', function () {
    Object.keys(numberField('test', 'name')).should.have.length(10);
  });

  it('should return an object which has keys: [type, id, name, fieldType, isRequired, isListField, isUnique, autoIncrement, defautValue, validator]', function () {
    numberField('test', 'name').should.have.keys('type', 'id', 'name', 'fieldType', 'isRequired', 'isListField', 'isUnique', 'autoIncrement', 'defaultValue', 'validator');
  });

  it('should return an object whose id is "test"', function () {
    numberField('test', 'name').should.have.property('id', 'test');
  });

  it('should return an object whose type is an Object', function () {
    numberField('test', 'name').type.should.be.an.Object();
  });

  it('should return an object whose type has id "Core.Field"', function () {
    numberField('test', 'name').type.should.have.property('id', 'Core.Field');
  });

  it('should return an object whose fieldType is an Object', function () {
    numberField('test', 'name').fieldType.should.be.an.Object();
  });

  it('should return an object whose fieldType has id "Core.NumberType"', function () {
    numberField('test', 'name').fieldType.should.have.property('id', 'Core.NumberType');
  });

  it('should return an object whose isRequired is false if not specified', function () {
    numberField('test', 'name').isRequired.should.false();
  });

  it('should return an object whose isRequired is true if specified', function () {
    numberField('test', 'name', { isRequired: true }).isRequired.should.true();
  });

  it('should return an object whose isListField is false if not specified', function () {
    numberField('test', 'name').isListField.should.false();
  });

  it('should return an object whose isListField is false even if specified', function () {
    numberField('test', 'name', { isListField: true }).isListField.should.false();
  });

  it('should return an object whose isUnique is false if not specified', function () {
    numberField('test', 'name').isUnique.should.false();
  });

  it('should return an object whose isUnique is true if specified', function () {
    numberField('test', 'name', { isUnique: true }).isUnique.should.false();
  });

  it('should return an object whose autoIncrement is false if not specified', function () {
    numberField('test', 'name').autoIncrement.should.false();
  });

  it('should return an object whose autoIncrement is true if specified', function () {
    numberField('test', 'name', { autoIncrement: true }).autoIncrement.should.false();
  });

  it('should return an object whose defaultValue is undefined if not specified', function () {
    should.equal(numberField('test', 'name').defaultValue, undefined);
  });

  it('should return an object whose defaultValue is specified value', function () {
    numberField('test', 'name', { defaultValue: 0 }).defaultValue.should.be.equal(0);
  });
});
