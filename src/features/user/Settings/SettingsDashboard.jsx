import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SettingsNav from './SettingsNav';
import AboutPage from './AboutPage';
import BasicPage from './BasicPage';
import { updateProfile } from '../userActions'

const actions = {
  updateProfile
};

const mapState = (state) => ({
  providerId: state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
})

const SettingsDashboard = ({  user, updateProfile }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" render={() => <BasicPage updateProfile={updateProfile} initialValues={user}/>} />
          <Route path="/settings/about" render={() => <AboutPage updateProfile={updateProfile} initialValues={user}/>} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState, actions)(SettingsDashboard);