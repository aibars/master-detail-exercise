import React from 'react';
import '../styles/App.css';
import ItemsList from './ItemsList';
import SelectedItem from './SelectedItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchItems, invalidateItem,
} from '../actions';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchItems())
  }

  handleRefreshClick() {
    const { dispatch, selectedItem } = this.props;

    if(selectedItem.item) dispatch(invalidateItem());

    dispatch(fetchItems());
  }

  render() {
    const { selectedItem, items, isFetching, lastUpdated } = this.props;
    return (
      <div className="App" >
        <header className="App-header">
          Master-Detail Exercise
        </header>
        <div id="left-col" style={{ opacity: isFetching ? 0.5 : 1 }}>
          <label className="list-title">Pokemons List {lastUpdated && (
            <span className="update-info">
              (Last updated at {new Date(lastUpdated).toLocaleTimeString()})
              </span>
          )}
          </label>
          {!isFetching && (
            <button className="refresh-btn" onClick={this.handleRefreshClick}>Refresh</button>
          )}
          {isFetching && items.length === 0 && <h2>Loading...</h2>}
          {!isFetching && items.length === 0 && <h2>Empty.</h2>}
          {items.length > 0 &&
            <div >
              <ItemsList items={items} />
            </div>
          }
        </div>
        <SelectedItem selectedItem={selectedItem} />
      </div >
    );
  }
}

App.propTypes = {
  selectedItem: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedItem, pokemons } = state;
  const { isFetching, lastUpdated, items } = pokemons;

  return {
    selectedItem,
    items,
    isFetching,
    lastUpdated
  };
}

export default connect(mapStateToProps)(App);