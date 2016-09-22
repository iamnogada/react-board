import React from 'react'

class MainAppBar extends  React.Component {
    

    render () {

        
        const spacer = (<div className="mdl-layout-spacer"></div>);

        return (
            <nav className="mdl-navigation" >
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
            </nav>            
        )
    }
}

export default MainAppBar;