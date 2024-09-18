import styles from './detailsList.module.css';

interface DetailItem {
  key: string;
  value: string | number | undefined;
}

interface Props {
  details: DetailItem[];
}

export const DetailsList = ({ details }: Props) => {
  return (
    <>
      {details.length ? (
        <ul>
          {details.map((detail, index) => (
            // Need a better key as identifier.
            <li className={styles.listItem} key={index}>
              <span>{detail.key}</span>
              <span className={styles.detailValue}>{detail.value}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>List is empty</p>
      )}
    </>
  );
};
