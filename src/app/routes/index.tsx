import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

const Routes = () =>

    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact
                   path={`/`}
                   component={React.lazy(() => import('./Dashboard'))}/>
        </Switch>
    </Suspense>


export default withRouter(Routes);