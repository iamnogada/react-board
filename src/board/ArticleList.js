import React from 'react';


class ArticleList extends React.Component {

    /* Component Life cycle handler */
    /*
    *컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.
    *
    */
    componentWillMount(){console.log('componentWillMount');}
    componentDidMount() {
        
    }
    componentWillReceiveProps(nextProps){console.log('componentWillReceiveProps');}
    shouldComponentUpdate(nextProps, nextState){console.log('shouldComponentUpdate'); return true;}
    componentWillUpdate(nextProps, nextState){console.log('componentWillUpdate');}
    componentDidUpdate(nextProps, nextState){console.log('componentDidMount');}
    componentWillUnmount(){console.log('componentWillUnmount');}


    render() {
        return (
            <div>
            Article List
            </div>
        )
    }
}

export default ArticleList;