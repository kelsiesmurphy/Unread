import React from 'react';
import RemoveButton from '../components/RemoveButton';
import {render, fireEvent, waitFor} from '@testing-library/react';

describe('RemoveButton', () => {

    let container;
    beforeEach(() => {
      container = render(< RemoveButton />);
    });


    it("should delete a book on click", () => {
        const downButton = container.getByTestId("button-down");
        fireEvent.click(downButton);
        const counterh1 = container.getByTestId("counter");
        expect(counterh1).toHaveTextContent('-1');
      });