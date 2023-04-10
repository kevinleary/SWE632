const isFormValid = require('./homeInspectionFormValidation');

test('All parameters present', () => {
    expect(isFormValid('first', 'last', 'first.last@gmu.edu', 'Hillside house', 'George Mason University',
    'Fairfax', 'Virginia', '22030')).toBe(true);
});

test('All parameters missing', () => {
    expect(isFormValid('', '', '', '', '', '', '', '')).toBe(false);
});

test('firstName missing', () => {
    expect(isFormValid('', 'last', 'first.last@gmu.edu', 'Hillside house', 'George Mason University',
    'Fairfax', 'Virginia', '22030')).toBe(false);
});

test('lastName missing', () => {
    expect(isFormValid('first', '', 'first.last@gmu.edu', 'Hillside house', 'George Mason University',
    'Fairfax', 'Virginia', '22030')).toBe(false);
});

test('email missing', () => {
    expect(isFormValid('first', 'last', '', 'Hillside house', 'George Mason University',
    'Fairfax', 'Virginia', '22030')).toBe(false);
});

test('houseType missing', () => {
    expect(isFormValid('first', 'last', 'first.last@gmu.edu', '', 'George Mason University',
    'Fairfax', 'Virginia', '22030')).toBe(false);
});

test('address missing', () => {
    expect(isFormValid('first', 'last', 'first.last@gmu.edu', 'first.last@gmu.edu', '',
    'Fairfax', 'Virginia', '22030')).toBe(false);
});

test('city missing', () => {
    expect(isFormValid('first', 'last', 'first.last@gmu.edu', 'first.last@gmu.edu', 'George Mason University',
    '', 'Virginia', '22030')).toBe(false);
});

test('state missing', () => {
    expect(isFormValid('first', 'last', 'first.last@gmu.edu', 'first.last@gmu.edu', 'George Mason University',
    'Fairfax', '', '22030')).toBe(false);
});

test('zip missing', () => {
    expect(isFormValid('first', 'last', 'first.last@gmu.edu', 'first.last@gmu.edu', 'George Mason University',
    'Fairfax', 'Virginia', '')).toBe(false);
});