import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HeaderBar from '../components/HeaderBar';

import NoMatch from './404';

function Home() {
  return <div>hello world</div>;
}

export default function App(props: any) {
  return (
    <React.Fragment>
      <HeaderBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  );
}
