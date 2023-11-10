const { render, screen } = require('@testing-library/react');
const { GifExpertApp } = require('../../src/GifExpertApp');

describe('Pruebas en GifExpertApp', () => {
  test('should ', () => {
    render(<GifExpertApp />);

    screen.debug();
  });
});
