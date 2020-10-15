import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const BasicLayout = React.lazy(() => import('@/components/layouts/basicLayout')) //主页
const NoFound = React.lazy(() => import('@/views/exception/noFound')) //404

function App() {
  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          <Route path='/' component={BasicLayout}></Route>
          <Route path='404' component={NoFound}></Route>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App