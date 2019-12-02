import React from 'react';
import '../styles/ItemsList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectItem } from '../actions';

class ItemsList extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(item) {
        const { dispatch } = this.props;
        dispatch(selectItem(item));
    }

    render() {
        return (
            <div>
                <ul className="items-list">
                    {this.props.items.map((item, i) => (
                        <li className="pokeball" onClick={() => this.handleItemClick(item)} key={i}>{item.name[0].toUpperCase() + item.name.slice(1)}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

ItemsList.propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func.isRequired
}

export default connect()(ItemsList);