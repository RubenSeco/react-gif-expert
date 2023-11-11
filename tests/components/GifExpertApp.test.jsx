import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/components';
describe('Pruebas en GifExpertApp', () => {
  test(' ', () => {
    render(<GifExpertApp />);
    screen.debug();
  });
});
