import { combineReducers } from 'redux';

import {
    BOARD_REQUEST_CONTACTS, 
    BOARD_RECEIVED_CONTACTS,
    BOARD_SELECT_CONTACT,
    BOARD_REQUEST_FAIL} from '../action/ActionTypes';


const boardInitialState = {
    page: -1,
    status: 'ready',
    errorMsg:'',
    selectedContact : {},
    contacts : []
}

const contactReducer = (state=boardInitialState, action) =>{
    switch(action.type){
        case BOARD_REQUEST_CONTACTS:
            return {
                ...state,
                status:'fetching'
            };
        case BOARD_RECEIVED_CONTACTS:
            return {
                ...state,
                status:'fetched',
                contacts:action.contacts
            };
        case BOARD_REQUEST_FAIL:
            return state;
        default : return state;
    }
}

const selectReducer = (state=boardInitialState, action)=>{
    switch(action.type){
        case BOARD_SELECT_CONTACT:
            return {
                ...state,
                selectedContact:action.contact
            };
        default : return state;
    }
}

const boardReducer = combineReducers({
  contactReducer,
  selectReducer
})

export default boardReducer