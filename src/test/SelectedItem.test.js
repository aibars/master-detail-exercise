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

    it('shows loading while fetching', () => {
        const component = shallow((
            <SelectedItem
                selectedItem={{
                    item: null,
                    isFetching: true
                }}
            />
        ));
                
        expect(component.children().find('h2').text()).toEqual('Loading...');
    });

    it('renders a hidden ability', () => {
        const component = shallow((
            <SelectedItem
                selectedItem={{
                    item: {
                        species: {
                            name: '1'
                        },
                        abilities: [
                            {
                                ability: "ability1",
                                is_hidden: true,
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

        expect(component.find('.hidden')).toHaveLength(1);
    });
}); 