import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInHeader, { LogInForm } from './LogIn';
import SignUpHeader, { SignUpForm } from './SignUp';
import OptionHeader from './Option';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <LogInHeader />
              <LogInForm />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <SignUpHeader />
              <SignUpForm />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <LogInHeader />
              <LogInForm />
            </>
          }
        />
        <Route path="/option" element={<OptionHeader/>}/>
      </Routes>
    </Router>
  );
};



