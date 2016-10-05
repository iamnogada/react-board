
import {
    BOARD_REQUEST_CONTACTS, 
    BOARD_RECEIVED_CONTACTS,
    BOARD_REQUEST_NEXT_CONTACTS, 
    BOARD_RECEIVED_NEXT_CONTACTS,
    BOARD_SELECT_CONTACT,
    BOARD_REQUEST_FAIL} from '../action/ActionTypes';

import axios from 'axios';

/* normalize async action */
export const getContacts = (page) => {
    return (dispatch) => {
        dispatch(requestContacts(page));
        return axios.get('/data/contact20.json', { page })
            .then(

            (response) => {
                // console.log("response");
                // console.log(JSON.stringify(response.data));
                dispatch(receivedContacts(response));
            }
            )
            .catch(
            (error) => { dispatch(requestFail(error)); }
            );
    }
}


export const requestContacts = (page) => {
    return {
        type: BOARD_REQUEST_CONTACTS,
        page
    }
}

export const receivedContacts = (json) => {
    // console.log("result");
    // console.log(json);
    return {
        type: BOARD_RECEIVED_CONTACTS,
        contacts: json.data.map(child => child)
    }
}

export const selectContact = (contact) => ({
    type: BOARD_SELECT_CONTACT,
    contact
})

export const requestFail = (msg) => ({
    type: BOARD_REQUEST_FAIL,
    msg
})