

import React, { Component } from 'react';
import { render } from 'react-dom';
import Vip from '../src/page/Vip/Vip'
import Cart from '../src/page/Cart/Cart'
import My from '../src/page/My/My'
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import TabBar from 'src/components/TabBar/TabBar'
import 'src/common/index.less'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Provider } from 'react-redux';
import store from './store';
import Login from 'src/page/Login/Login.js';
import Reg from 'src/page/Reg/Reg.js';
import Detail from 'src/page/Detail/Detail.js';

import history from './history';


import Async from  './AsyncComponent';

let Home = Async(() => import('src/page/Home/Home.js'));


render(<Provider store={store}>
    <Router history={history}>
        <Route
            render={({ location }) => (
                <React.Fragment>
                    <TransitionGroup className='full'>
                        <CSSTransition key={location.key} classNames="fade" timeout={300}>
                            <div location={location} className="full">
                                <Switch>
                                    <Route path="/home" component={Home} />

                                    <Route path="/vip" component={Vip}/>
                                    <Route path="/cart" component={Cart}/>
                                    <Route path="/my" component={My}/>
                                    <Route path="/login" component={Login} />
                                    <Route path="/reg" component={Reg} />
                                    <Route path="/detail" component={Detail} />
                                    <Redirect to="/home" />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                    <TabBar></TabBar>
                </React.Fragment>
            )} />
    </Router >
</Provider>, window.app);
if (module.hot) {
    module.hot.accept();
}