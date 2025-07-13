import React from 'react';
import Form from './Form';
import Login from './Log';
import ForgotPassword from './ForgetPass';
import CheckEmail from './CheckMail';
import SetNewPassword from './Newpass';
import PasswordReset from './ResetPass';

const App = () => {
  return (
    <div>
      <Form></Form>
      <Login></Login>
      <ForgotPassword></ForgotPassword>
      <CheckEmail></CheckEmail>
      <SetNewPassword></SetNewPassword>
      <PasswordReset></PasswordReset>
    </div>
  );
};

export default App;