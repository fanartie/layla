
import initState from './initState';
import immer from 'immer';

const reducer = (state=initState, action) => {

    switch (action.type) {

        case 'setCountry':
            return immer(state, draft =>{
                draft.currentCountry = (action.countryCode || '').toLowerCase()
            })

        default:
            return state;
    }
}

export default reducer;


