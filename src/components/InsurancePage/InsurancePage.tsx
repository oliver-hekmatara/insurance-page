import { Page } from 'components/Page/Page';
import { InsuranceResponse } from 'types/insurance';
import styles from './insurancePage.module.css';
import { InsuranceHeaderSection } from './sections/InsuranceHeaderSection';
import { InsuranceDetailsSection } from './sections/InsuranceDetailsSection';
import { InsuranceParametersSection } from './sections/insuranceParametersSection';

interface InsurancePageProps {
  title: string;
  insurance: InsuranceResponse;
}

export const InsurancePage = ({ title, insurance }: InsurancePageProps) => {
  const { insurance: insuranceData, parameters, displayType } = insurance;

  return (
    <Page title={title} goback>
      <InsuranceHeaderSection
        insuranceCompany={insuranceData.insuranceCompany || ''}
        insuranceName={insuranceData.insuranceName}
        displayType={displayType}
      />

      <div className={styles.insuranceSummary}>
        <InsuranceDetailsSection insurance={insuranceData} />
        <InsuranceParametersSection parameters={parameters} />
      </div>
    </Page>
  );
};
