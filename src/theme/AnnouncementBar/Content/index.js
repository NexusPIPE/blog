import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import styles from './styles.module.css';

const rngStrings = {
  'get-started-str-rng': [
    '🚀 Secure your site with NexusPIPE today! 🚀',
    '🚀 Get started with NexusPIPE today! 🚀',
    '🚀 Never too late to switch to a competent product - Try NexusPIPE Today! 🚀',
  ]
}

export default function AnnouncementBarContent(props) {
  const { announcementBar } = useThemeConfig();
  const { content } = announcementBar;
  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: rngStrings[content] ? rngStrings[content][Math.floor(Math.random() * rngStrings[content].length)] : content }}
    />
  );
}
