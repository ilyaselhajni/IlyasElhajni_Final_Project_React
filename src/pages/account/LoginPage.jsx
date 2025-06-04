import React, { useState, useRef } from 'react';
import Footer from '../../components/Footer';
import emailjs from '@emailjs/browser';

const LoginPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const templateParams = {
        to_email: formData.email,
        message: 'You have successfully logged in to your account.',
        from_name: 'Fashe Store'
      };

      await emailjs.send(
        'service_8kflwor', 
        'template_karr1jg',   templateParams,
        'arSTs6ZW9lXvE954a' 
      );

      setSuccess('Login successful! Check your email for confirmation.');
     
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const templateParams = {
        to_email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        message: 'Welcome to Fashe Store! Your account has been created successfully.',
        from_name: 'Fashe Store'
      };

      await emailjs.send(
        'service_8kflwor', 
        'template_karr1jg', 
        templateParams,
        'arSTs6ZW9lXvE954a'
      );

      setSuccess('Account created successfully! Check your email for confirmation.');
      setShowSignup(false);
     
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-white pt-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center">
          {!showSignup ? (
            <>
              <div className="flex-1 border p-10 bg-white">
                <h2 className="text-3xl font-montserrat font-light mb-2">New Customer</h2>
                <div className="text-lg font-semibold text-gray-500 mb-2">Register Account</div>
                <div className="text-gray-500 mb-8">
                  By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                </div>
                <button 
                  onClick={() => setShowSignup(true)}
                  className="bg-black text-white px-12 py-3 font-montserrat text-base tracking-wide hover:bg-gray-800 transition-colors"
                >
                  CONTINUE
                </button>
              </div>

              <div className="flex-1 border p-10 bg-white">
                <h2 className="text-3xl font-montserrat font-light mb-2">Returning Customer</h2>
                <div className="text-lg font-semibold text-gray-500 mb-4">I am a returning customer</div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {success && <div className="text-green-500 mb-4">{success}</div>}
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border px-3 py-2" 
                      placeholder="Email" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input 
                      type="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border px-3 py-2" 
                      placeholder="Password" 
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-500 text-sm">Forgot your password?</a>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <button type="submit" className="bg-black text-white px-12 py-3 font-montserrat text-base tracking-wide hover:bg-gray-800 transition-colors">SIGN IN</button>
                    <a href="/" className="text-gray-500 text-sm">or Return to Store</a>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 border p-10 bg-white">
              <h2 className="text-3xl font-montserrat font-light mb-2">Create Account</h2>
              <div className="text-lg font-semibold text-gray-500 mb-4">Sign up for a new account</div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
              {success && <div className="text-green-500 mb-4">{success}</div>}
              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border px-3 py-2" 
                    placeholder="First Name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border px-3 py-2" 
                    placeholder="Last Name" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2" 
                    placeholder="Email" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border px-3 py-2" 
                    placeholder="Password" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Confirm Password</label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border px-3 py-2" 
                    placeholder="Confirm Password" 
                    required
                  />
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <button type="submit" className="bg-black text-white px-12 py-3 font-montserrat text-base tracking-wide hover:bg-gray-800 transition-colors">SIGN UP</button>
                  <button 
                    type="button" 
                    onClick={() => setShowSignup(false)}
                    className="text-gray-500 text-sm"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LoginPage; 