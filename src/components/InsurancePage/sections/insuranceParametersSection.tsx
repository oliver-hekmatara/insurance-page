import { useFormatMessage } from 'hooks/useFormatMessage';
import { HeadlineFive, HeadlineSeven, IconLink } from '@insurely/ui';
import { Link } from 'react-router-dom';
import { Parameter } from 'types/insurance';
import { InsuranceParametersList } from 'components/InsuranceParametersList/InsuranceParametersList';
import styles from '../insurancePage.module.css';
import Pill from 'components/Pill';

interface InsuranceParametersSectionProps {
  parameters: Parameter[];
}

export const InsuranceParametersSection = ({ parameters }: InsuranceParametersSectionProps) => {
  const formatMessage = useFormatMessage();

  const paramGroup1 = parameters.filter((param) => param.parameterGroupOrder === 1);
  const paramGroup1Name = paramGroup1.length > 0 ? paramGroup1[0].parameterGroup : '';

  const paramGroup2 = parameters.filter((param) => param.parameterGroupOrder === 2);
  const paramGroup2Name = paramGroup2.length > 0 ? paramGroup2[0].parameterGroup : '';

  return (
    <section className={styles.coverageDetailsSection}>
      <div className={styles.topSection}>
        <div className={styles.titleContainer}>
          <HeadlineFive className="ph-no-capture">{formatMessage('Coverage')}</HeadlineFive>
          <Pill
            styleType="transparent"
            style={{
              cursor: 'pointer',
              padding: '5px 12px',
              fontSize: '10px',
            }}
          >
            {formatMessage('Compare')}
          </Pill>
        </div>
        <Link
          className={styles.termsLink}
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          <IconLink width="30px" color="var(--green)" />
          {formatMessage('Complete insurance terms')}
        </Link>
      </div>

      <div className={styles.listContainer}>
        <HeadlineSeven style={{ marginBottom: '20px' }} className="ph-no-capture">
          {paramGroup1Name}
        </HeadlineSeven>
        <InsuranceParametersList parameters={paramGroup1} />
      </div>

      <div className={styles.listContainer}>
        <HeadlineSeven style={{ marginBottom: '20px' }} className="ph-no-capture">
          {paramGroup2Name}
        </HeadlineSeven>
        <InsuranceParametersList parameters={paramGroup2} />
      </div>
    </section>
  );
};
