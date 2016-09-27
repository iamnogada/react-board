import React from 'react';


class ContactItem extends React.Component {
    render() {
        const imgStyle = {
            height:"100%"
        }
        return (
            <div>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="http://placeimg.com/150/210/people?1" style={imgStyle} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h5>Keven Wood &nbsp; <small>IBM 33560 Hollow Ridge Lane Seoul Korea</small></h5>
                            <p>
                                <a className="btn-floating btn-small waves-effect waves-light center-align purple">
                                    <i className="material-icons">email</i></a>&nbsp;kevein @am.mail.com&nbsp;
                                <a className="btn-floating btn-small waves-effect waves-light center-align purple">
                                <i className="material-icons">phone</i></a>&nbsp;+82-10-9999-3333
                            </p>
                        </div>
                        <div className="card-action">
                            <div className="chip red white-text">
                                Live
                            </div>
                            <span className="">
                                Articles<span className="w3-badge w3-red">8</span>
                            </span>
                            <div className="chip">
                                SI, OS
                            </div>
                            <div className="chip">
                                Sales
                            </div>...
                        </div>
                    </div>
                    <div className="card-image only-large" style={imgStyle}>
                        <img src="img/map.png" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactItem;