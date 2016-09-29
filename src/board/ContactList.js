import React from 'react';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import * as actions from '../action/boardAction'

class ContactList extends React.Component {
    constructor(props){
        super(props);
        // this.state={
        //     page: -1,
        //     status: 'ready',
        //     errorMsg: '',
        //     selectedContact: {},
        //     contacts: []
        // }
        
    }

    /* Component Life cycle handler */
    /*
    *컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.
    *
    */
    componentWillMount(){console.log('componentWillMount');}
    componentDidMount() {
        // console.log("mount done");
        
        this.props.dispatch(actions.getContacts(0)).then(()=>
            { 
                }
        );
    }
    componentWillReceiveProps(nextProps){console.log('componentWillReceiveProps');}
    shouldComponentUpdate(nextProps, nextState){console.log('shouldComponentUpdate'); return true;}
    componentWillUpdate(nextProps, nextState){console.log('componentWillUpdate');}
    componentDidUpdate(nextProps, nextState){console.log('componentDidMount');}
    componentWillUnmount(){console.log('componentWillUnmount');}

    render() {

        const mapToComponents = data => {
            console.log(data);
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
            contacts: state.contactReducer.contacts
        }
}
export default connect(mapStateToProps)(ContactList)
