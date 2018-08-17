import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import Landing from '../landing/Landing.js';
import Dashboard from '../dashboard/Dashboard.js';
import '../../style/main.scss';
import createAppStore from '../../lib/store.js'

const store = createAppStore();

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {/* <React.Fragment> */}
                        {/* <main> */}
                            {/* <nav>
                                <ul className="navbar">
                                    <li className="navitem"><Link to={'/'}>Home</Link></li>
                                    <li className="navitem"><Link to={'/dashboard'}>Dashboard</Link></li>
                                </ul>
                            </nav> */}
                            {/* <Route exact path="/" component={Landing} /> */}
                            <Route exact path="/" component={Dashboard} />
                        {/* </main> */}
                    {/* </React.Fragment> */}
                </BrowserRouter>
            </Provider>
        )
    }
}