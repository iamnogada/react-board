
// import {
//     BOARD_REQUEST_CONTACTS, 
//     BOARD_RECEIVED_CONTACTS,
//     BOARD_SELECT_CONTACT,
//     BOARD_REQUEST_FAIL} from 'ActionTypes';

export const BOARD_REQUEST_CONTACTS = "BOARD_REQUEST_CONTACTS";
export const BOARD_RECEIVED_CONTACTS = "BOARD_RECEIVED_CONTACTS";
export const BOARD_SELECT_CONTACT = "BOARD_SELECT_CONTACT";
export const BOARD_REQUEST_FAIL = "BOARD_REQUEST_FAIL";

import axios from 'axios';

/* normalize async action */
export const getContacts = (page) => {
    return (dispatch) => {
        dispatch(reqeustContacts(page));
        return axios.get('/data/contact20.json', { page })
            .then(

            (response) => {
                // console.log("response");
                // console.log(JSON.stringify(response.data));
                dispatch(receivedContacts(response));
            }
            )
            .catch(
            (error) => { dispatch(reqeustFail(error)); }
            );
    }
}


export const reqeustContacts = (page) => {
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

export const reqeustFail = (msg) => ({
    type: BOARD_REQUEST_FAIL,
    msg
})