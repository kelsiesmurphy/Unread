import SearchBar from '../components/SearchBar';
import {render, fireEvent, waitFor} from '@testing-library/react'

describe('SearchBar', () => {

  let container;
  beforeEach(() => {
    container = render(< SearchBar />);
  });

  it('should receive a search value from searchBar.js', () => {
      const searchBarInput = container.getByTestId("search-bar");
      fireEvent.change(searchBarInput, {target: {value: "This is a test"}})
      expect(searchBarInput.value).toEqual("This is a test");
  });

  xit('should submit and sent search value to main container', () => {
      const searchButton = container.getByTestId("search-button");
      fireEvent.click(searchButton);
      // expect(searchButton.value).toEqual(""); // this need work
  })
}) 