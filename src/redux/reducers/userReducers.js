import {
    CHECK_USER,
    CHECK_USER_ERROR,
    CHECK_USER_SUCCESS
} from '../types';

const initialState = {
    user: {},
    error: false,
    loading: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case CHECK_USER:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case CHECK_USER_SUCCESS:
            const userData = action.payload;
            return {
                ...state,
                loading: false,
                error: false,
                user: {...userData}
            }
        case CHECK_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        default: 
            return state;
    }

}