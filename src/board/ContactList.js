import React from 'react';
import ContactItem from './ContactItem';


class ContactList extends React.Component {
    constructor(props){
        super(props);
        console.log("c..list");
    }
    render() {
        return (
            <div>
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            </div>
        )
    }
}

export default ContactList;