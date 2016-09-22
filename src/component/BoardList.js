import React from 'react'
import BoardItem from './BoardItem';

class BoardList extends React.Component {
    render() {
        return (
            <section className="section--center mdl-grid mdl-grid--no-spacing ">
            <ul className="demo-list-three mdl-list">
                <li className="mdl-list__item mdl-list__item--three-line">
                    <span className="mdl-list__item-primary-content">
                        <i className="material-icons mdl-list__item-avatar">person</i>
                        <span>Bryan Cranston</span>
                        <span className="mdl-list__item-text-body">
                            Bryan Cranston played the role of Walter in Breaking Bad. He is also known
                            for playing Hal in Malcom in the Middle.
                        </span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                    <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                    <span className="mdl-chip">
                        <span className="mdl-chip__text">Basic Chip</span>
                    </span>
                    </span>
                </li>
            </ul>
            </section>
        )
    }
}

export default BoardList;