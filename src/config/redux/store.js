const { createStore } = require('redux');

const initialState = {
    dataBlog: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;