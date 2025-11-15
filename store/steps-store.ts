import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Step {
  label: string;
  completed?: boolean;
  data?: Record<string, unknown>;
}

export interface StepsState {
  steps: Step[];
  currentStep: number;
  currentScreen: number;
  previousStepBeforeChange: number | null;
  isCompleted: boolean;

  setSteps: (steps: Step[]) => void;
  setCurrentStep: (step: number) => void;
  setCurrentScreen: (screen: number) => void;
  setPreviousStepBeforeChange: (step: number | null) => void;
  nextStep: () => void;
  previousStep: () => void;
  completeStepsUpTo: (stepIndex: number) => void;
  resetSteps: () => void;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
}

export const useStepsStore = create<StepsState>()(
  persist(
    (set, get) => ({
      steps: [],
      currentStep: 1,
      currentScreen: 1,
      previousStepBeforeChange: null,
      isCompleted: false,

      setSteps: (steps) => {
        const { steps: currentSteps } = get();
        // Only update if steps are actually different
        if (JSON.stringify(steps) !== JSON.stringify(currentSteps)) {
          const isCompleted = steps.every((step) => step.completed);
          set({ steps, isCompleted });
        }
      },

      setCurrentStep: (step) => {
        const { steps, currentStep } = get();
        // Only update if step is valid and different from current
        if (step >= 1 && step <= steps.length && step !== currentStep) {
          set({ currentStep: step });
        }
      },

      setCurrentScreen: (screen) => {
        const { currentScreen } = get();
        // Only update if screen is different from current
        if (screen !== currentScreen) {
          set({ currentScreen: screen });
        }
      },

      setPreviousStepBeforeChange: (step) => {
        set({ previousStepBeforeChange: step });
      },

      nextStep: () => {
        const { currentStep, steps } = get();
        if (currentStep < steps.length) {
          set({ currentStep: currentStep + 1 });
        }
      },

      previousStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 });
        }
      },

      completeStepsUpTo: (stepIndex) => {
        const { steps } = get();
        const updatedSteps = steps.map((step, index) =>
          index < stepIndex - 1 ? { ...step, completed: true } : step
        );

        const isCompleted = updatedSteps.every((step) => step.completed);
        set({ steps: updatedSteps, currentStep: stepIndex, isCompleted });
      },

      resetSteps: () =>
        set({
          steps: [],
          currentStep: 1,
          currentScreen: 1,
          previousStepBeforeChange: null,
          isCompleted: false
        }),

      canGoNext: () => {
        const { currentStep, steps } = get();
        return currentStep < steps.length;
      },

      canGoPrevious: () => {
        const { currentStep } = get();
        return currentStep > 1;
      }
    }),
    {
      name: 'steps-storage',
      partialize: (state) => ({
        steps: state.steps,
        currentStep: state.currentStep,
        currentScreen: state.currentScreen,
        previousStepBeforeChange: state.previousStepBeforeChange,
        isCompleted: state.isCompleted
      })
    }
  )
);
