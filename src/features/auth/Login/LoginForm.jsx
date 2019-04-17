import React from 'react';
import { Form, Segment} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { login, socialLogin } from '../authActions'
import SocialLogin from "../SocialLogin/SocialLogin"

const actions = {
  login,socialLogin
}

const LoginForm = ({socialLogin}) => {
  return (
    <Form  size="large" >
      <Segment>
        <SocialLogin socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(LoginForm);