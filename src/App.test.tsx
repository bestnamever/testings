import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
import HiddenMessage from './HiddenMessage';

// self tests
let wrapper: RenderResult;
beforeEach(() => {
  wrapper = render(<App />);
});
describe('Should render App component correctly', () => {
  // init word is  “Hello World!"
  test('Should render “Hello World!" correctly', () => {
    // getByTestId: Get DOM from data-testid 
    // outcome = div tag of HelloWorld
    const app = wrapper.getByTestId('container');
    expect(app).toBeInTheDocument();

    // if it's div?
    expect(app.tagName).toEqual('DIV');

    // div's tag matches /world/i ?
    expect(app.textContent).toMatch(/world/i);
  });

  // after click, text is "Hello Jack!"
  test('Should render “Hello Jack!" correctly after click', () => {
    const app = wrapper.getByTestId('container');
    // fireEvent: simulate click event
    fireEvent.click(app);
    expect(app.textContent).toMatch(/jack/i);
  });

  // after double click, text is "Hello World!"
  test('Should render "Hello World!" correctly after double click', () => {
    const app = wrapper.getByTestId('container');
    fireEvent.click(app);
    fireEvent.click(app);
    expect(app.textContent).toMatch(/world/i);
  })
});


test('shows the children when the checkbox is checked', () => {
  const app = wrapper.getByTestId('container');

  // click to show the text
  const testMessage = 'test message'
  const testMessage_2 = 'test clicked'
  render(<HiddenMessage>{testMessage_2}</HiddenMessage>);
  expect(screen.queryByText(testMessage)).toBeNull();
  fireEvent.click(screen.getByLabelText(/show/i));
  expect(screen.getByText(testMessage_2)).toBeInTheDocument();


  // click agian to hide the text
  fireEvent.click(app);
  expect(screen.getByText(testMessage)).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText(/show/i));
  expect(screen.queryByText(testMessage)).toBeNull();
});

