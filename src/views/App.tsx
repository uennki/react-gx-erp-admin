import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import Apple from './Apple';
import Banana from './Banana';
import NoMatch from './404';

export default function App(props: any) {
  return (
    <React.Fragment>
      <div style={{ height: 60 }}>
        <Link to='/' style={{ marginRight: 15 }}>
          Home
        </Link>
        <Link to='/apple' style={{ marginRight: 15 }}>
          Apple
        </Link>
        <Link to='/banana' style={{ marginRight: 15 }}>
          Banana
        </Link>
        <Link to='/404' style={{ marginRight: 15 }}>
          404
        </Link>
      </div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/apple' component={Apple} />
        <Route path='/banana' component={Banana} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  );
}
