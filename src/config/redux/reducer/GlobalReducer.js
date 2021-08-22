const initialState = {
    name: 'antasofa'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            dataBlog: action.payload
        }
    }

    return state;
}

export default globalReducer;