import React from 'react';
import '../styles/ItemsList.css';

export default function ItemsList(props) {

    return (
        <div>
            <ul>
                {props.items.map((item, i) => (
                    <li key={i}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}