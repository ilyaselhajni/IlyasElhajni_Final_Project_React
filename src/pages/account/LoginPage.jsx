import React from 'react';
import Footer from '../../components/Footer';

const LoginPage = () => (
    <>
      <div className="min-h-screen flex flex-col items-center bg-white pt-8">
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center">

      <div className="flex-1 border p-10 bg-white">
        <h2 className="text-3xl font-montserrat font-light mb-2">New Customer</h2>
        <div className="text-lg font-semibold text-gray-500 mb-2">Register Account</div>
        <div className="text-gray-500 mb-8">
          By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
        </div>
        <button className="bg-black text-white px-12 py-3 font-montserrat text-base tracking-wide">CONTINUE</button>
      </div>

      <div className="flex-1 border p-10 bg-white">
        <h2 className="text-3xl font-montserrat font-light mb-2">Returning Customer</h2>
        <div className="text-lg font-semibold text-gray-500 mb-4">I am a returning customer</div>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border px-3 py-2" placeholder="Email" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full border px-3 py-2" placeholder="Password" />
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-gray-500 text-sm">Forgot your password?</a>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button type="submit" className="bg-black text-white px-12 py-3 font-montserrat text-base tracking-wide">SIGN IN</button>
            <a href="/" className="text-gray-500 text-sm">or Return to Store</a>
          </div>
        </form>
      </div>
    </div>
  </div>
      <Footer/>
  </>
);

export default LoginPage; 