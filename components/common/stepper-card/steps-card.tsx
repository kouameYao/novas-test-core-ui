'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { StepsCardProps } from './types';

export const StepsCard: React.FC<StepsCardProps> = ({
  title,
  title2,
  subtitle1,
  subtitle2,
  children,
  buttonText = 'Continuer',
  hasBottomContent = true,
  hasLoginLink = true,
  className,
  containerClassName,
  currentStep,
  onBackButtonClick,
  stepperClassName
}) => {
  return (
    <div
      className={cn(
        'max-w-lg mx-auto mt-5 md:mt-5 lg:-mt-12',
        containerClassName
      )}
    >
      <motion.div
        className={cn(
          'bg-white rounded-4xl p-8 flex flex-col min-h-[70vh] max-h-[80vh] overflow-y-auto',
          className
        )}
        layout
        transition={{
          layout: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          }
        }}
      >
        <motion.div className="flex-1" layout="position">
          <div className="mb-3 leading-8">
            <h1 className="text-[26px] font-medium text-black">{title}</h1>
            {title2 && (
              <h1 className="text-[26px] font-medium text-black">{title2}</h1>
            )}
          </div>

          {subtitle1 && (
            <div className="mb-6 -space-y-1">
              <p className="text-[#171511] font-light">{subtitle1}</p>
              {subtitle2 && (
                <p className="text-[#171511] font-light">{subtitle2}</p>
              )}
            </div>
          )}

          <motion.div className="pt-5" layout="position">
            {children}
          </motion.div>
        </motion.div>

        {hasBottomContent && (
          <motion.div layout="position">
            {hasLoginLink && (
              <div className="text-center">
                <a href="/login" className="text-black text-sm hover:underline">
                  J'ai déjà un compte Paynah
                </a>
              </div>
            )}
            <Button
              type="submit"
              className="w-full mt-6 md:mt-8 bg-black text-white font-bold py-6 rounded-3xl hover:bg-gray-800"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
