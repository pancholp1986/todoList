import {
    LOAD_ITEMS,
    LOAD_ITEMS_ERROR,
    LOAD_ITEMS_SUCCESS,
    ADD_ITEM,
    ADD_ITEM_ERROR,
    ADD_ITEM_SUCCESS,
    EDIT_ITEM,
    EDIT_ITEM_ERROR,
    EDIT_ITEM_SUCCESS,
    GET_EDIT_ITEM,
    GET_EDIT_ITEM_SUCCESS,
    GET_EDIT_ITEM_ERROR,
    GET_DELETE_ITEM,
    GET_DELETE_ITEM_SUCCESS,
    GET_DELETE_ITEM_ERROR,
    DELETE_ITEM,
    DELETE_ITEM_ERROR,
    DELETE_ITEM_SUCCESS
} from '../types'

import { toast } from 'react-toastify';

import axios from 'axios'
import config from '../../config';

const {
    urlLoadItems
} = config;

const loadItems = () => ({
    type: LOAD_ITEMS,
    payload: true
});

const loadItemsSuccess = items => ({
    type: LOAD_ITEMS_SUCCESS,
    payload: items
})

const loadItemsError = message => ({
    type: LOAD_ITEMS_ERROR,
    payload: {}
})


const addItem = () => ({
    type: ADD_ITEM,
    payload: true
})

const addItemSuccess = item => ({
    type: ADD_ITEM_SUCCESS,
    payload: item
});

const addItemError = () => ({
    type: ADD_ITEM_ERROR,
    paylod: true
})


const editItem = () => ({
    type: EDIT_ITEM,
    payload: true
})

const editItemError = () => ({
    type: EDIT_ITEM_ERROR,
    paylod: true
})

const editItemSuccess = item => ({
    type: EDIT_ITEM_SUCCESS,
    payload: item
})

const getItemToEdit = () => ({
    type: GET_EDIT_ITEM
})

const getItemToEditSuccess = item => ({
    type: GET_EDIT_ITEM_SUCCESS,
    payload: item
})

const getItemToEditError = item => ({
    type: GET_EDIT_ITEM_ERROR
})


const deleteItem = item => ({
    type: DELETE_ITEM,
    payload: item
})

const deleteItemError = () => ({
    type: DELETE_ITEM_ERROR,
    paylod: true
})

const deleteItemSuccess = () => ({
    type: DELETE_ITEM_SUCCESS
})

const getItemToDelete = () => ({
    type: GET_DELETE_ITEM
})

const getItemToDeleteSuccess = item => ({
    type: GET_DELETE_ITEM_SUCCESS,
    payload: item
})

const getItemToDeleteError = item => ({
    type: GET_DELETE_ITEM_ERROR
})

const showMessageSuccess = message => {
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });    
}

// actions

export function listItemsAction(userId) {

    return async (dispatch) => {
        dispatch(loadItems())

        try {
            const response = await axios.get(urlLoadItems);
            if (response && response.status === 200) {
                const {
                    data
                } = response;

                const usersItems = data.filter(item => item.userId === userId);
                dispatch(loadItemsSuccess(usersItems));
            } else {
                dispatch(loadItemsError({ message: 'Error accediendo a los items' }));
            }

        } catch (err) {
            dispatch(loadItemsError({ message: err }));
        }

    }
}

export function addItemAction(item) {
    return async (dispatch) => {
        dispatch(addItem())
        try {

            // Insert item at data base and get it, but... I leave the item at the state
            dispatch(addItemSuccess(item))
            showMessageSuccess('Item added succeful!')
        } catch (err) {
            dispatch(addItemError())
        }

    }
}

export function editItemAction(item) {
    return (dispatch) => {
        dispatch(editItem())
        try {

            // Update item at data base and get it, but... I leave the item without changes
            dispatch(editItemSuccess(item))
            showMessageSuccess('Item updated succeful!')
        } catch (err) {
            console.log('err: ', err);
            dispatch(editItemError())
        }

    }
}

export function getItemToEditAction(item) {
    return (dispatch) => {
        dispatch(getItemToEdit());
        try {
            dispatch(getItemToEditSuccess(item));
        } catch (err) {
            dispatch(getItemToEditError());
        }
    }
}

export function getItemToDeleteAction(item) {
    return (dispatch) => {
        dispatch(getItemToDelete());
        try {
            dispatch(getItemToDeleteSuccess(item));
        } catch (err) {
            dispatch(getItemToDeleteError());
        }
    }
}

export function deleteItemAction(item) {
    return (dispatch) => {
        dispatch(deleteItem(item));
        try {
            // Delete item at databases and get it ...
            dispatch(deleteItemSuccess())
            showMessageSuccess('Item deleted succeful!')

        } catch (err) {
            dispatch(deleteItemError())
        }
    }
}