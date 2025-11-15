'use client';

import React from 'react';

import { ArrowBack } from './arrow-back';
import { Stepper } from './stepper';
import { StepsCardHeaderProps } from './types';

export const StepsCardHeader: React.FC<StepsCardHeaderProps> = ({
  currentStep,
  onBackButtonClick
}) => {
  return (
    <div className="flex relative flex-row items-center my-6 md:mt-0">
      <ArrowBack
        className="mr-4 mb-0 absolute hidden md:block -left-10 lg:-left-14 xl:-left-32 lg:-top-2"
        handleOnClick={onBackButtonClick}
      />
      <Stepper />
    </div>
  );
};
