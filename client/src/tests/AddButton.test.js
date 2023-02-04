import React from 'react';
import AddButton from '../components/AddButton';
import {render, fireEvent, waitFor} from '@testing-library/react';

describe('AddButton', () => {

  let container;
  beforeEach(() => {
    container = render(< AddButton />);
  });

  xit("should add a book to a list", () => {
      const upButton = container.getByTestId("button-up");
      fireEvent.click(upButton);
      const addButton = container.getByTestId("addButton");
      expect(addButton.textContent).toEqual('1');
  });
})