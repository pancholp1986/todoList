import {
    LOAD_ITEMS,
    LOAD_ITEMS_SUCCESS,
    LOAD_ITEMS_ERROR,
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_ERROR,
    EDIT_ITEM,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_ERROR,
    GET_EDIT_ITEM,
    GET_EDIT_ITEM_SUCCESS,
    GET_EDIT_ITEM_ERROR,
    GET_DELETE_ITEM,
    GET_DELETE_ITEM_ERROR,
    GET_DELETE_ITEM_SUCCESS,
    DELETE_ITEM,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_ERROR
} from '../types'

const initialState = {
    items: [],
    error: false,
    loading: false,
    activeItem: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_ITEMS:
            return {
                ...state,
                loading: action.payload,
                activeItem: null
            }
        case LOAD_ITEMS_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                items: action.payload,
                activeItem: null
            }
        case LOAD_ITEMS_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                activeItem: null
            }
        case ADD_ITEM:
            return {
                ...state,
                loading: true,
                error: false,
                activeItem: null
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                activeItem: null,
                items: [...state.items, action.payload]
            }
        case ADD_ITEM_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                activeItem: null
            }
        case GET_DELETE_ITEM:
        case GET_EDIT_ITEM:
            return {
                ...state,
                loading: true,
                error: false,
                activeItem: null
            }
        case GET_DELETE_ITEM_SUCCESS:
        case GET_EDIT_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                activeItem: action.payload
            }
        case GET_DELETE_ITEM_ERROR:
        case GET_EDIT_ITEM_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                activeItem: null
            }
        case DELETE_ITEM:
            return {
                ...state,
                loading: true,
                error: false,
                activeItem: action.payload
            }            
        case EDIT_ITEM:
            return {
                ...state,
                loading: true,
                error: false,
                activeItem: null
            }
        case DELETE_ITEM_SUCCESS:
            const itemToDelete = state.activeItem;
            const itemsAfterDeletion = [...state.items].filter(item => item.id !== itemToDelete.id);

            return {
                ...state,
                loading: false,
                error: false,
                activeItem: null,
                items: [...itemsAfterDeletion]
            }
        case EDIT_ITEM_SUCCESS:
            const itemsAfterUpdation = [...state.items].map((item) => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.completed = action.payload.completed;
                }
                return item;
            });

            return {
                ...state,
                loading: false,
                error: false,
                activeItem: null,
                items: [...itemsAfterUpdation]
            }
        case DELETE_ITEM_ERROR:
        case EDIT_ITEM_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                activeItem: null
            }
        default:
            return state;
    }
}