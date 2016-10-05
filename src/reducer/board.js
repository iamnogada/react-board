import { combineReducers } from 'redux';
import update from 'react-addons-update';

import {
    BOARD_REQUEST_CONTACTS, 
    BOARD_RECEIVED_CONTACTS,
    BOARD_REQUEST_NEXT_CONTACTS, 
    BOARD_RECEIVED_NEXT_CONTACTS,
    BOARD_SELECT_CONTACT,
    BOARD_CONTACT_SETPOSITION,
    BOARD_REQUEST_FAIL} from '../action/ActionTypes';


const boardInitialState = {
    page: -1,
    status: 'ready',
    errorMsg:'',
    selectedContact : {},
    boardScrollTop:0,
    contacts : []
}

const contactReducer = (state=boardInitialState, action) =>{
    switch(action.type){
        case BOARD_REQUEST_CONTACTS:
            return update(state,{
                status:{$set:'fetching'}
            });
        case BOARD_RECEIVED_CONTACTS:
            return update(state,{
                status:{$set:'fetched'},
                contacts:{$push:action.contacts}
            });
        case BOARD_REQUEST_FAIL:
            return state;
        case BOARD_CONTACT_SETPOSITION:
        return update(state,{
            boardScrollTop:{$set:action.scrollTop}
        });
        default : return state;
    }
}

const selectReducer = (state=boardInitialState, action)=>{
    switch(action.type){
        case BOARD_SELECT_CONTACT:
            return update(state,{
                selectedContact:{$set:action.contact}
            });
        default : return state;
    }
}

const boardReducer = combineReducers({
  contactReducer,
  selectReducer
})

export default boardReducer