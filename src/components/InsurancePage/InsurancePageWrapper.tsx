import { useState, useEffect, FC } from 'react';

import { InsuranceResponse } from 'types/insurance';

import { wash } from 'utils/insurance';

import { InsurancePage } from './InsurancePage';

interface InsurancePageWrapProps {
  insurances: InsuranceResponse[];
  externalId: string;
}

export const InsurancePageWrapper: FC<InsurancePageWrapProps> = ({ externalId, insurances }) => {
  const [insurance, setInsurance] = useState<InsuranceResponse | undefined>();

  useEffect(() => {
    const matchingInsurance = insurances.find(
      (ins) => ins.insurance.externalId.toString() === externalId,
    );
    setInsurance(matchingInsurance);
  }, [externalId, insurances]);

  if (!insurance?.collectionId) return null;

  return (
    <InsurancePage
      title={`${wash(insurance.displayType)}, ${insurance.insurance.insuranceName}`}
      insurance={insurance}
    />
  );
};
