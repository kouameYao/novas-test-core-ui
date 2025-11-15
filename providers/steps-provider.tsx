'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useRef
} from 'react';

import { useStepsStore, type StepsState, type Step } from '@/store/steps-store';

interface StepsContextType extends StepsState {}

const StepsContext = createContext<StepsContextType | undefined>(undefined);

interface StepsProviderProps {
  children: ReactNode;
  steps: Step[];
  initialCurrentStep?: number;
}

export const StepsProvider: React.FC<StepsProviderProps> = ({
  children,
  steps,
  initialCurrentStep = 0
}) => {
  const stepsState = useStepsStore();
  const initializedRef = useRef(false);

  // Initialize steps only once using useRef to prevent re-initialization
  if (!initializedRef.current) {
    if (steps && steps.length > 0) {
      stepsState.setSteps(steps);
    }
    if (initialCurrentStep > 0) {
      stepsState.setCurrentStep(initialCurrentStep);
    }
    initializedRef.current = true;
  }

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue: StepsContextType = useMemo(
    () => ({
      ...stepsState
    }),
    [stepsState]
  );

  return (
    <StepsContext.Provider value={contextValue}>
      {children}
    </StepsContext.Provider>
  );
};

export const useSteps = (): StepsContextType => {
  const context = useContext(StepsContext);
  if (context === undefined) {
    throw new Error('useSteps must be used within a StepsProvider');
  }
  return context;
};

// Hook for direct access to the store (without context)
export const useStepsStoreDirect = useStepsStore;
