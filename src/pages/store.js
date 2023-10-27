import { createStore } from "redux";

const initialState = {
    user: {
        name: "",
        age: 0,
        gender: "",
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
