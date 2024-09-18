import { useFormatMessage } from 'hooks/useFormatMessage';
import styles from '../insurancePage.module.css';
import { useContext } from 'react';
import UserContext from 'contexts/user/UserContext';
import { formatCurrency } from 'translations/utils';
import { Insurance } from 'types/v3/Insurance';
import { DetailsList } from 'components/DetailsList/DetailsList';
import { formatCompanyName } from 'utils/insurance';
import { HeadlineFive } from '@insurely/ui';

interface InsuranceDetailsSectionProps {
  insurance: Insurance;
}

export const InsuranceDetailsSection = ({ insurance }: InsuranceDetailsSectionProps) => {
  const { config } = useContext(UserContext);

  const formatMessage = useFormatMessage();

  function getMonthlyPayment() {
    if (insurance.employerPaid) return formatMessage('Employer paid');
    if (!insurance.premiumAmountYearRounded) return formatMessage('UNKNOWN_PREMIUM_FREQUENCY');
    return formatMessage('amount/month', {
      amount: formatCurrency(config, Math.ceil(insurance.premiumAmountYearRounded / 12)),
    });
  }

  const insuranceData1 = [
    {
      key: formatMessage('Monthly premium'),
      value: getMonthlyPayment(),
    },
    {
      key: formatMessage('Renewal date'),
      value: insurance.renewalDate,
    },
    {
      key: formatMessage('Annual premium'),
      value: insurance.premiumAmountYearRounded,
    },
  ];

  const insuranceData2 = [
    {
      key: formatMessage('Insurance number'),
      value: insurance.insuranceNumber,
    },
    {
      key: formatMessage('Insurance company'),
      value: formatCompanyName(insurance.insuranceCompany || ''),
    },
    {
      key: formatMessage('Insurance name'),
      value: insurance.insuranceName,
    },
    {
      key: formatMessage('Insurance object address'),
      value: insurance.insuranceObjectStreetAddress,
    },
    {
      key: formatMessage('Insurance object postal code'),
      value: insurance.insuranceObjectPostalCode,
    },
    {
      key: formatMessage('Insurance amount'),
      value: insurance.insuredMovablesAmount ?? 0,
    },
    {
      key: formatMessage('Living area'),
      value: insurance.livingArea,
    },
    {
      key: formatMessage('Number of residents'),
      value: insurance.numberOfResidents,
    },
  ];

  const insuranceData3 = [{ key: formatMessage('Name'), value: insurance.insuranceHolderName }];

  return (
    <section className={styles.insuranceDetailsSection}>
      <div className={styles.listContainer}>
        <DetailsList details={insuranceData1} />
      </div>

      <div className={styles.listContainer}>
        <HeadlineFive style={{ marginBottom: '20px' }} className="ph-no-capture">
          {formatMessage('Insurance')}
        </HeadlineFive>
        <DetailsList details={insuranceData2} />
      </div>

      <div className={styles.listContainer}>
        <HeadlineFive style={{ marginBottom: '20px' }} className="ph-no-capture">
          {formatMessage('Insurance holder')}
        </HeadlineFive>
        <DetailsList details={insuranceData3} />
      </div>
    </section>
  );
};
