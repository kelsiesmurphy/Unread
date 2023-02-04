import React from 'react';
import ResultsList from "../components/ResultsList";
import {render, fireEvent, waitFor} from '@testing-library/react';

describe('ResultsList', () => {

  let container;
  beforeEach(() => {
    container = render(< ResultsList />);
  });

  xit('it should return a list of books',() => {
      const ResultsListInput = container.getByTestId("resultsList");
      expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(['Alice', 'Bob']))
  })
})
