import React from "react";

type StepperProps = {
  steps: string[];
  currentStep: number;
  onPrev?: () => void;
  onNext?: () => void;
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onPrev,
  onNext,
}) => {
  const handlePrev = () => {
    if (onPrev) {
      onPrev();
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    }
  };

  const progressPercentage = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="flex w-full max-w-2xl flex-col items-center">
      <div className="h-4 w-full rounded bg-gray-200">
        <div
          className="h-4 rounded bg-green-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Stepper;
