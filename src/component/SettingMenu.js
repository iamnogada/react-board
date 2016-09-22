import React from 'react'

class SettingMenu extends  React.Component {
    

    render () {

        
        const spacer = (<div className="mdl-layout-spacer"></div>);

        return (
            <nav className= "mdl-navigation">
                <a className="mdl-navigation__link" href=""><i className="material-icons">search</i></a>
                <button id="setting_menu" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                    <i className="material-icons">more_vert</i>
                </button>
                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                        htmlFor="setting_menu">
                    <li className="mdl-menu__item">Add Acount</li>
                    <li className="mdl-menu__item">About</li>
                    <li disabled className="mdl-menu__item">Log out</li>
                </ul>
            </nav>            
        )
    }
}

export default SettingMenu;