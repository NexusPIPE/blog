import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useAnnouncementBar } from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';
import styles from './styles.module.css';

// id:href? pairs
const barLinks = {
  'getstarted-bar-1': 'https://nexuspipe.com/get-started',
  'uvc-bar-1': '/introducing-uvc',
};

export const AnBar = () => {
  const { announcementBar } = useThemeConfig();
  const { isActive, close } = useAnnouncementBar();
  if (!isActive) {
    return null;
  }
  const { backgroundColor, textColor, isCloseable } = announcementBar;
  return (
    <div
      className={styles.announcementBar}
      style={{ backgroundColor, color: textColor }}
      role="banner"
    >
      {isCloseable && <div className={styles.announcementBarPlaceholder} />}
      <AnnouncementBarContent className={styles.announcementBarContent} />
      {isCloseable && (
        <AnnouncementBarCloseButton
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            close(e);
          }}
          className={styles.announcementBarClose}
        />
      )}
    </div>
  );
};
export const AnnouncementBar = () => {
  const { announcementBar } = useThemeConfig();
  // if announcementbar.href, use a link to wrap ab, otherwise just use ab
  return (
    <>
      {barLinks[announcementBar.id] ? (
        <a
          className={`${styles.announcementBarLink}`}
          href={barLinks[announcementBar.id]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnBar />
        </a>
      ) : (
        <AnBar />
      )}
    </>
  );
};
export default AnnouncementBar;
