import React from 'react';
import '../styles/SelectedItem.css';
import '../styles/App.css';

export default function SelectedItem(props) {
    const { item, isFetching } = props.selectedItem;

    return (
        <div id="right-col" style={{ opacity: isFetching ? 0.5 : 1 }}>
            <label className="list-title"> Selected Pokemon:</label>
            {isFetching && <h2>Loading...</h2>}
            {item &&
                (<div className="beast-info">
                    <br />
                    <span className="selected-name">Beast Name: {item.species.name[0].toUpperCase() + item.species.name.slice(1)}</span>
                    <div className="img-container">
                        <img width="150" height="150" src={item.sprites.front_default} alt={item.species.name} />
                        <img width="150" height="150" src={item.sprites.back_default} alt={item.species.name} />
                    </div>
                    <br />
                    Abilities:
                    <ul className="abilities-list">
                        {item.abilities.map((elem, i) => (
                            <li key={i} className="ability">{elem.ability.name} {elem.is_hidden ?
                                <img className="hidden" height="25" width="25" src={require('../styles/hidden.png')} alt=""></img> : ''}
                            </li>
                        ))}
                    </ul>
                    Stats:
                    <ul className="abilities-list">
                        {item.stats.map((elem, i) => (
                            <li key={i} className="ability">{elem.stat.name}: {elem.base_stat}</li>
                        ))}
                    </ul>
                </div>)}
        </div>
    );
}