import React from 'react';
import Form from './Form';
import Login from './Log';
import ForgotPassword from './ForgetPass';
import CheckEmail from './CheckMail';
import SetNewPassword from './Newpass';

const App = () => {
  return (
    <div>
      <Form></Form>
      <Login></Login>
    <ForgotPassword></ForgotPassword>
    <CheckEmail></CheckEmail>
    <SetNewPassword></SetNewPassword>
    </div>
  );
};

export default App;