const Types = require('./types');
const field = require('./field');

function longTextField(id, name, args) {
  const isRequired = !!(args && args.isRequired === true);
  const isListField = false;
  const defaultValue = (args && args.defaultValue ? args.defaultValue : undefined);
  const validator = args && args.validator;

  return field(id, name, Types.LongTextType, isRequired, isListField, defaultValue, validator);
}

module.exports = longTextField;
