import {
    CHECK_USER,
    CHECK_USER_ERROR,
    CHECK_USER_SUCCESS
} from '../types';

// get user data and set on store

import config from '../../config'
const {
    userLogin
} = config;

const checkUser = () => ({
    type: CHECK_USER
})

const checkUserSuccess = user => ({
    type: CHECK_USER_SUCCESS,
    payload: user
})

const checkUserError = () => ({
    type: CHECK_USER_ERROR
})

export function checkUserAction () {
    return (dispatch) => {
        dispatch(checkUser());
        try {
            // get user data from config and set it on store
            dispatch(checkUserSuccess(userLogin));
        } catch (err) {
            dispatch(checkUserError());
        }
    }
}