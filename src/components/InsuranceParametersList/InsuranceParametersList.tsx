import { IconCheckMark, IconClose, IconPlus } from '@insurely/ui';
import { Parameter } from 'types/insurance';
import styles from './insuranceParametersList.module.css';

interface Props {
  parameters: Parameter[];
}

export const InsuranceParametersList = ({ parameters }: Props) => {
  return (
    <ul>
      {parameters.map((param, index) => (
        // Need a better key as identifier.
        <li className={styles.listItem} key={index}>
          <IconPlus width="20px" />
          <span className={styles.listItemKey}>{param.parameterDisplayName}</span>
          <span className={styles.listItemValue}>
            {param.value === 'true' ? (
              <IconCheckMark width="24px" color="var(--green)" />
            ) : (
              <IconClose width="24px" color="red" />
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};
