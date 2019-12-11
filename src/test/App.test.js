import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../components/App';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('App', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      pokemons: {
        items: [],
        isFetching: false,
        lastUpdate: Date.now()
      },
      selectedItem: {
        item: null,
        isFetching: false
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on refresh click with null item', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should dispatch an action on refresh click with selected item', () => {
    store = mockStore({
      pokemons: {
        items: [],
        isFetching: false,
        lastUpdate: Date.now()
      },
      selectedItem: {
        item: {
          species: {
            name: [
              "something"
            ]
          },
          sprites: {
            front_default: 'url1',
            back_default: 'url1',
          },
          abilities: [],
          stats: []
        },
        isFetching: false
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(3);
  });
});