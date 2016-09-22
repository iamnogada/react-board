import React from 'react';

import { MainAppBar, BoardTitleMenu, BoardList, SettingMenu } from '../component';


class BoardApp extends React.Component {
     
    
    render(){
        return  (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">React+MDL</span>
                <div className="mdl-layout-spacer"></div>
                <SettingMenu />
            </div>
            </header>
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">React+MDL</span>
                <MainAppBar />
            </div>
        <main className="mdl-layout__content">
        <div className="page-content mdl-grid">
            <BoardTitleMenu />
            <BoardList />
        </div>
        </main>
        </div>
        );
    }

    // _updateValue(randomValue){
    //     this.setState({
    //         value: randomValue
    //     });
    // }
}

// App.defaultProps = {
//     header: 'Default header',
//     contentTitle: 'Default contentTitle',
//     contentBody: 'Default contentBody'
// }

export default BoardApp;