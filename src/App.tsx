import React, {Suspense} from 'react';
import './assets/vendors/style'
import {SideBar} from './containers/SideBar/'
import Routes from './app/routes'
import {BrowserRouter as Router} from "react-router-dom";

const App: React.FC = (props) => {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-2 col-sm-2 col-md-1 nopadding">
                    <SideBar/>
                </div>
                <div className="col-10 col-sm-10 col-md-11 nopadding">
                    <Router>
                        <Routes/>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default App;
