import React, { useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HeaderBar from '../components/HeaderBar';

import NoMatch from './404';

function Home() {
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>hello world</div>;
}
function About() {
  return <div>About About</div>;
}

export default function App() {
  return (
    <React.Fragment>
      <HeaderBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  );
}
