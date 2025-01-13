import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogInForm } from './LogIn';
import  { SignUpForm } from './SignUp';
import OptionHeader, { OptionBody } from './Option';
import { PizzaBody, PizzaFooter, PizzaHeader } from './CraftPizza';
import { PastBody, PastHeader } from './PastOrder';
import { PriceBody, PriceFooter, PriceHeader } from './Price';
import  { SurpriseFooter, SurpriseHeader } from './Surprise';
import SurpriseBody from './Surprise';
import { Footer } from './Option';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              
              <LogInForm />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              
              <SignUpForm />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <LogInForm />
            </>
          }
        />
        <Route path="/option" 
        element={
        <>
        <OptionHeader/>
        <OptionBody/> 
        <Footer />
        </>
        }/>
         <Route path="/craft" 
        element={
        <>
        <PizzaHeader/>
        <PizzaBody/>
        <PizzaFooter />
        </>
        }/>
         <Route path="/past" 
        element={
        <>
        <PastHeader/>
        <PastBody />
        <Footer/>
        </>
        }/>
         <Route path="/price" 
        element={
        <>
        <PriceHeader/>
        <PriceBody/>
        <PriceFooter/>
        </>
        }/>
         <Route path="/surprise" 
        element={
        <>
          <SurpriseHeader />
          <SurpriseBody />
          <SurpriseFooter />
        </>
        }/>
      </Routes>
    </Router>
  );
};



