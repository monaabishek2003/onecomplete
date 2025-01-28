"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react';
import { useCheckoutNavigation } from '@/hooks/useCheckoutNavigation';
import WizardStepper from '@/components/WizardStepper';
import CheckoutDetailsPage from "./details/page";

const page = () => {
  const {isLoaded} = useUser();
  const {checkoutStep} = useCheckoutNavigation();
  

  if(!isLoaded) return null;
  
  const renderStep = () => {
    console.log(checkoutStep);
    switch(checkoutStep) {
      case 1: 
        return <CheckoutDetailsPage />;
      case 2:
        return "PaymentPage";
      case 3:
        return "CompletionPage";
      default:
        return "DetailsPage"        
    }
  };

  return (
    <div className="checkout">
      <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content">{renderStep()}</div>
    </div>
  )
}

export default page
