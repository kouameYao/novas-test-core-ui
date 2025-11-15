'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '@/lib/utils';
import { useSteps } from '@/providers/steps-provider';

interface StepperProps {
  className?: string;
}

const defaultSteps = [
  { label: '-', completed: false },
  { label: '-', completed: false },
  { label: '-', completed: false },
  { label: '-', completed: false }
];

export const Stepper = ({ className }: StepperProps) => {
  const { currentStep, steps } = useSteps();

  const displaySteps = steps.length > 0 ? steps : defaultSteps;

  return (
    <div className={cn('w-full', className)}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between">
          {displaySteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center flex-1">
                <div className="relative h-1.5 rounded-full w-full mb-1 bg-[#DEDCDC] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-black rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: index < currentStep - 1 ? 1 : 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                      delay: index * 0.1
                    }}
                  />
                </div>
                <motion.span
                  className={cn('hidden md:flex text-xs text-[#9E9E9E]')}
                  animate={{
                    color: index < currentStep ? '#000000' : '#9E9E9E'
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1
                  }}
                >
                  {step.label}
                </motion.span>
              </div>

              {index < displaySteps.length - 1 && <div className="w-2" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
