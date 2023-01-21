import MainContainer from "../containers/MainContainer";
import {render, fireEvent, waitFor} from '@testing-library/react'

describe('MainContainer', () => {

    let container;
    beforeEach(() => {
      container = render(< MainContainer />);
    });
      
  }) 