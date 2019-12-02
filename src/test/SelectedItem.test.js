import React from 'react';
import { shallow } from 'enzyme';

import SelectedItem from '../components/SelectedItem';

describe('SelectedItem', () => {
    it('renders the card', () => {
        const component = shallow((
            <SelectedItem
                selectedItem={{
                    item: {
                        species: {
                            name: '1'
                        },
                        abilities: [
                            {
                                ability: "ability1"
                            }
                        ],
                        stats: [
                            { stat: "stat1" }
                        ],
                        sprites: {
                            front_default: 'sprite1'
                        }
                    },
                    isFetching: false
                }}
            />
        ));

        expect(component).toMatchSnapshot();
    });
});