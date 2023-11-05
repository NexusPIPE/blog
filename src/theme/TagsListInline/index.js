import clsx from 'clsx';
// import Translate from '@docusaurus/Translate';
import Tag from '@theme/Tag';
import styles from './styles.module.css';
export default function TagsListInline({ tags }) {
  return (
    <>
      <span className="variant-snippet">
        <b>Want more like this?</b>
        <br />
        Find other articles tagged with
      </span>
      <ul
        className={clsx(
          styles.tags,
          'padding--none',
          'margin-left--sm',
          'thefunnyul',
        )}
      >
        {tags.map(({ label, permalink: tagPermalink }) => (
          <li key={tagPermalink} className={styles.tag}>
            <Tag label={label} permalink={tagPermalink} />
          </li>
        ))}
      </ul>
    </>
  );
}
