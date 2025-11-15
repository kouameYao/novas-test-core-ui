'use client';

import { useState } from 'react';

export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly currency?: string;
}

interface PassPlanItemsProps {
  plans: readonly Plan[];
  onSelect?: (plan: Plan) => void;
  defaultSelected?: string;
}

export function PassPlanItems({
  plans,
  onSelect,
  defaultSelected
}: PassPlanItemsProps) {
  const [selected, setSelected] = useState<string | undefined>(defaultSelected);

  const handleSelect = (plan: Plan) => {
    setSelected(plan.id);
    onSelect?.(plan);
  };

  return (
    <div className="w-full space-y-3">
      {plans.map((plan) => (
        <button
          key={plan.id}
          onClick={() => handleSelect(plan)}
          className={`w-full bg-[#F7F7F7] flex cursor-pointer items-center justify-between px-6 py-5 rounded-3xl transition-all duration-300 ease-in-out hover:bg-gray-150 ${
            selected === plan.id ? 'ring-1 ring-[#868685] bg-white' : 'ring-0'
          }`}
        >
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ease-in-out ${
                selected === plan.id
                  ? 'border-black bg-black scale-110'
                  : 'border-gray-400 bg-white scale-100'
              }`}
            >
              <div
                className={`w-2 h-2 bg-white rounded-full transition-all duration-200 ${
                  selected === plan.id
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0'
                }`}
              />
            </div>
            <div className="text-left">
              <p className="font-medium text-base text-black">{plan.name}</p>
              <p className="text-sm font-light text-gray-100">
                {plan.description}
              </p>
            </div>
          </div>
          <p className="font-medium text-base text-black ml-4">
            {plan.price.toLocaleString('fr-FR')} {plan.currency || 'FCFA'}
          </p>
        </button>
      ))}
    </div>
  );
}
