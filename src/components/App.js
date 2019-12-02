import React from 'react';
import '../styles/App.css';
import ItemsList from './ItemsList';
import SelectedItem from './SelectedItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchItems,
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

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    //dispatch(invalidateItems());
    dispatch(fetchItems());
  }

  render() {
    const { selectedItem, items, isFetching, lastUpdated } = this.props;
    return (
      <div className="App" style={{ opacity: isFetching ? 0.5 : 1 }}>
        <header className="App-header">
          Master-Detail Exercise
        </header>
        <div id="left-col">
          <label>Pokemons List:</label> {!isFetching && (
            <button className="refresh-btn" onClick={this.handleRefreshClick}>Refresh</button>
          )}
          <br />
          <span className="update-info">
            {lastUpdated && (
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
              </span>
            )}
          </span>
          {isFetching && items.length === 0 && <h2>Loading...</h2>}
          {!isFetching && items.length === 0 && <h2>Empty.</h2>}
          {items.length > 0 &&
            <div >
              <ItemsList items={items} />
            </div>
          }
        </div>
        {selectedItem && <SelectedItem />}
      </div >
    );
  }
}

App.propTypes = {
  selectedItem: PropTypes.string.isRequired,
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