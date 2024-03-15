import React from 'react';
import CustomInput from '../components/CustomInput';

const Forgotpassword = () => {
  return (
    <div className="py-5" style={{ background: '#fff', minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="my-5 w-25 rounded-3 mx-auto p-4"
        style={{ background: '#F2F4F5' }}
      >
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please Enter your register email to get reset password mail.
        </p>
        <form action="">
          <CustomInput type="password" label="Email Address" id="email" />
          <br />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: '#FA8232' }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
