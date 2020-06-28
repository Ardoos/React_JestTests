import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from '../App';

test('Strona wyświetla się poprawnie', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Sprawdź czy pole do wpisywania zadań zawiera właściwą wartość tymczasową', () => {
  const { getByPlaceholderText } = render(<App />);

  expect(getByPlaceholderText("Dodaj nowe zadanie")).toBeTruthy();
});