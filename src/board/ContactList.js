import React from 'react';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import * as actions from '../action/boardAction'

class ContactList extends React.Component {
    constructor(props){
        super(props);

        this.state={
            loadingState : false
        }
        // this.state={
        //     page: -1,
        //     status: 'ready',
        //     errorMsg: '',
        //     selectedContact: {},
        //     contacts: []
        // }
        
    }

    loadContact(){
        this.props.dispatch(actions.getContacts(0)).then(() => {});
    }
    
       
    componentWillUnmount(){
        let pos = $(window).scrollTop();
        $(window).unbind();

        this.props.dispatch(actions.requestSetPosition(pos));
        // console.log("Component unmount event:"+pos);
        
    }
    componentDidMount() {
        if(0 === this.props.contacts.length){
            // console.log("init contact");
            this.loadContact();
        }
        // console.log("contacts count:" + this.props.contacts.length);
        $(window).scrollTop(this.props.boardScrollTop);
        $(window).scroll(() => {
            if("/board/contact" != this.props.location.pathname){return;}
            //WHEN HEIGHT UNDER SCROLLBOTTOM IS LESS THEN 250
            if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
                if(!this.state.loadingState) {
                    
                    this.loadContact();
                    this.setState({
                        loadingState: true
                    });
                }
            } else {
                if(this.state.loadingState) {
                    this.setState({
                        loadingState: false
                    });
                }
            }
        });
    }

    render() {
        const mapToComponents = data => {
            return data.map((contact, i) => {
                return (<ContactItem 
                            data={contact}
                            key={`${contact.cardID}-${Math.random()}`}
                />);
            });
        };

        return (
            <div>
                {mapToComponents(this.props.contacts)}
            </div>
        )
    }
}

ContactList.defaultProps={
    data :[]
}


let mapStateToProps = (state)=>{
    return {
            page: state.contactReducer.page,
            status: state.contactReducer.status,
            errorMsg: state.contactReducer.errorMsg,
            selectedContact: state.contactReducer.selectedContact,
            boardScrollTop: state.contactReducer.boardScrollTop,
            contacts: state.contactReducer.contacts
        }
}
export default connect(mapStateToProps)(ContactList)
