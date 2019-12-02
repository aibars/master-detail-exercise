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
                    <span className="selected-name">Beast Name: {item.species.name[0].toUpperCase() + item.species.name.slice(1)}</span>
                    <br/>
                    <img width="150" height="150" src={item.sprites.front_default} alt={item.species.name} />
                    <br/>
                    Abilities:
                    {/* <ul>
                    {item.abilities.map((ability, i) => (
                        <li>{ability}</li>
                    ))}
                    </ul> */}
                </div>)}
        </div>
    );
}