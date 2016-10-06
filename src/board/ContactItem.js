import React from 'react';

class ContactItem extends React.Component {

    constructor(props){
        super(props);

        this.handleCardItemClick = this.handleCardItemClick.bind(this);
    }

    handleCardItemClick(){
        this.props.onCardClick(this.props.data.cardID);
    }

    render() {
        const imgStyle = {
            height:"100%"
        }
        const emptyElement = (<span></span>)
        const liveElement=(
            <div className="chip red white-text">
                Live
            </div>
        )
        const articleElement=(
            <span className="">
                Articles<span className="w3-badge w3-red">{this.props.data.newArticleNumber}</span>
            </span>
        )
        const labelElement=(
            <span>
                {this.props.data.tags.slice(0,3).map((tag,i)=>{               
                     if(i==2){tag.label="...";}
                    return (<div key={i} className="chip">
                        {tag.label}
                    </div>)
                })}
            </span>
        )
        
        return (
            <div>
                <div className="card horizontal">
                    <div className="card-image">
                        
                    </div>
                    <div className="card-stacked">
                        <div className="card-content" onClick={this.handleCardItemClick}>
                            <h5>{this.props.data.name} &nbsp; <small>{this.props.data.address}</small></h5>
                            <p>
                                <a className="btn-floating btn-small waves-effect waves-light center-align purple">
                                    <i className="material-icons">email</i></a>&nbsp;{this.props.data.email}&nbsp;
                                <a className="btn-floating btn-small waves-effect waves-light center-align purple">
                                <i className="material-icons">phone</i></a>&nbsp;{this.props.data.phone}
                            </p>
                        </div>
                        <div className="card-action">
                            {this.props.data.isLive ? liveElement : emptyElement}
                            {this.props.data.newArticleNumber >0 ? articleElement : emptyElement}
                            {this.props.data.tags.length > 0 ? labelElement : emptyElement}
                        </div>
                    </div>
                    <div className="card-image only-large" style={imgStyle}>
                        <img src="/img/map1.png" />
                    </div>
                </div>
            </div>
        )
    }
}


/* 
{
    cardID:React.PropTypes.string,
    faceURL: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    address:React.PropTypes.string,
    email:React.PropTypes.string,
    phone:React.PropTypes.string,
    isLive:React.PropTypes.bool,
    newArticleNumber:React.PropTypes.number,
    labels:React.PropTypes.array,
    },
*/

ContactItem.propTypes = {
    data:React.PropTypes.object,    
    onCardClick: React.PropTypes.func
};

ContactItem.defaultProps = {
    data: {
        cardID: '001',
        faceURL: '10',
        name: 'Keven Wood',
        address: 'IBM 33560 Hollow Ridge Lane Seoul Korea',
        email: 'kevein@mail.com',
        phone: '82-10-9999-1234',
        isLive: false,
        newArticleNumber: 0,
        tags: [
            { "label": "si" },
            { "label": "sales" },
            { "label": "Finance" },
            { "label": "Payment" },
            { "label": "Manufacture" }
        ]
    },
    onCardClick: (cardID)=>{console.log(cardID+' Card clicked');}
};

export default ContactItem;