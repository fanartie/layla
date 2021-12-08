import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import store from '../../store';

const countryOptions = [
    { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },
    { key: 'us', value: 'us', flag: 'us', text: 'United State' },
    { key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom' },
    { key: 'it', value: 'it', flag: 'it', text: 'Italy' },
    { key: 'jp', value: 'jp', flag: 'jp', text: 'Japan' },
    { key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwan' },
]


function DropdownCountry() {

    const dispatch = useDispatch();

    const onChangeCountry = (event, data) => {
        //console.log(data.value);
        dispatch({
            type: 'setCountry',
            countryCode: data.value
        })
    }

    return (
        <Dropdown
            defaultValue={store.getState().currentCountry}
            selection
            options={countryOptions}
            placeholder='Select Country'
            onChange={onChangeCountry}
        />
    )
}

export default DropdownCountry;
