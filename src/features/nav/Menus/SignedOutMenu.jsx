import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn, register}) => {
  return (
    <Menu.Item position="right">
    <Button style={{ marginLeft: '0.5em' }} onClick={signIn} basic inverted content="Login" />
  </Menu.Item>
  )
}

export default SignedOutMenu
