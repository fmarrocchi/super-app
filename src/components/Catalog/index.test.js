
import React from 'react';

import { render, configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import Catalog from './';
/* */

configure({adapter: new Adapter()});
const mockStore = configureStore();

describe('<Catalog />', () => {
  it("Catalog should render four group items", () => {    
    const store = mockStore({
      catalog: {        
        groups: [
          { id: 1,
            name: "Almacen",
          },
          {
            id: 2,
            name: "Infusiones",
          },
          { 
            id: 3,
            name: "Lacteos",
          },
          { 
            id: 4,
            name: "Varios",
          }          
        ],
        products: [],
        categories: [],
        subcategories: [],
        err:""
      },
      login: { logged: true },
      userinfo: { userinfo: { email: "mariagomez@market.com",
                              id: 1,
                              lastName: "Gomez",
                              name: "Maria",
                              password: "Test123!"} },
    });
    
    const wrapper = render (
      <Provider store={store}>
        <Catalog />
      </Provider>
    );
    expect(wrapper.find(".group").length).toBe(4);
  });
})

