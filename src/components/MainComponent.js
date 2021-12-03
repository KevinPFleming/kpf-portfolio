import * as React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Main extends React.Component {
    render() {
        return(
            <div>
                <Header />
                    
                <Footer />
            </div>
        )
    }
};

export default Main;