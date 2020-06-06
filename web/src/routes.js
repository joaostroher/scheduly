import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CustomersList from './pages/Customer/List';
import CustomerRegister from './pages/Customer/Register';
import Services from './pages/Services';
import SchedulesList from './pages/Schedules/List';
import SchedulesRegister from './pages/Schedules/Register';
import Header from './pages/Header';
import { ContentDiv } from './styles/Content';

export default function Routes() {
  return (
    <Route>
      <>
        <ContentDiv>
          <Switch>
            <Route exact path="/schedules" component={SchedulesList} />
            <Route
              exact
              path="/schedules/register"
              component={SchedulesRegister}
            />
            <Route exact path="/customers" component={CustomersList} />
            <Route
              exact
              path="/customers/register"
              component={CustomerRegister}
            />
            <Route exact path="/services" component={Services} />
            <Redirect to={{ pathname: '/schedules' }} />
          </Switch>
        </ContentDiv>
        <Header />
      </>
    </Route>
  );
}
