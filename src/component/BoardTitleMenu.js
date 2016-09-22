import React from 'react'

class BoardTitleMenu extends  React.Component {

    render () {
        const buttonStyle={ 
            width: "92.5097 px",
            height: "92.5097 px",
            transform: "translate(-50%, -50%) translate(17px, 12px)"
        };
        const menuContainerStyle ={
            right: "8px", 
            top: "40px", 
            width: "124px", 
            height: "160px"
        };
        const buttonSize={
            width: "124px",
            height: "160px"
        };
        const menuStyle={
            clip: "rect(0px 124px 0px 124px)"
        };
        return (
            <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Welcome</h2>
                </div>
                <div className="mdl-card__supporting-text">
                This is an appendable list example.
                When this scroll in screen reaches at the bottom, it will automatically append next items.
                </div>               
                <div className="mdl-card__menu">
                    <button id="board_title_menu" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">view_comfy</i>
                    </button>
                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                            htmlFor="board_title_menu">
                        <li className="mdl-menu__item">Card</li>
                        <li className="mdl-menu__item">Brief List</li>
                        <li disabled className="mdl-menu__item">Simple List</li>
                    </ul>
                </div>
            </div>
            </section>
        )
    }
}

export default BoardTitleMenu;