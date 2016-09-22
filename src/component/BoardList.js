import React from 'react'
import BoardItem from './BoardItem';

class BoardList extends React.Component {
    render() {
        return (
            <div className="mdl-cell">
                <BoardItem />
            </div>
        )
    }
}

export default BoardList;