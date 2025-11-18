export interface StepsCardProps {
  title: string;
  title2?: string;
  subtitle1?: string;
  subtitle2?: string;
  children: React.ReactNode;
  buttonText?: string;
  hasBottomContent?: boolean;
  hasLoginLink?: boolean;
  className?: string;
  currentStep: number;
  containerClassName?: string;
  onBackButtonClick?: () => void;
  stepperClassName?: string;
}

export interface CardHeaderProps {
  currentStep: number;
  steps: { label: string }[];
  onBackButtonClick?: () => void;
}

export interface StepsCardHeaderProps {
  currentStep: number;
  onBackButtonClick?: () => void;
}
