import { CompanyLogo, HeadlineThree, IconDownload } from '@insurely/ui';
import Pill from 'components/Pill';
import { wash } from 'utils/insurance';
import styles from '../insurancePage.module.css';
import { useFormatMessage } from 'hooks/useFormatMessage';

type Props = {
  insuranceCompany: string;
  insuranceName: string;
  displayType: string;
};

export const InsuranceHeaderSection = ({ insuranceName, insuranceCompany, displayType }: Props) => {
  const formatMessage = useFormatMessage();

  return (
    <section className={styles.insurancePageHeader}>
      <div className={styles.logoTitleContainer}>
        <CompanyLogo company={insuranceCompany} width="50px" />

        <div className={styles.headlineContainer}>
          {wash(displayType)}
          <HeadlineThree className="ph-no-capture">{insuranceName}</HeadlineThree>
        </div>
      </div>

      <Pill
        styleType="transparent"
        className="download"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '6px 20px 6px 14px',
          alignSelf: 'start',
          marginLeft: '0',
          marginTop: '20px',
        }}
      >
        <>
          <IconDownload width="26px" />
          {formatMessage('Download insurance policy document')}
        </>
      </Pill>
    </section>
  );
};
