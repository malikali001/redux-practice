import { ADD_ITEM, REMOVE_ITEM } from './actions';

const initialState = {
    items: [],
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

export default itemReducer;
