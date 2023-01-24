import MainContainer from "../containers/MainContainer";
import {render, fireEvent, waitFor} from '@testing-library/react'

describe('MainContainer', () => {

    let container;
    beforeEach(() => {
      container = render(< MainContainer />);
    });

    //go to week_8/day_1 for reminder of how to write unit tests

    xit('should receive a search value from searchBar.js', () => {
      const searchValue = container.getByTestId("search-bar");
      fireEvent.change(input, {target: {value: "This is a test"}})
      expect(searchValue.textContent).toEqual("This is a test");
    })
      
  }) 