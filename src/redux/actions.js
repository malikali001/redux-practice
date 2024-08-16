export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};

export const reset = () => {
    return {
        type: RESET,
    };
};

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item,
    };
};

export const removeItem = index => {
    return {
        type: REMOVE_ITEM,
        payload: index,
    };
};