import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import { useEffect } from 'react';

const rngStrings = {
  'get-started-str-rng': [
    '🚀 Secure your site with NexusPIPE today! 🚀',
    '🚀 Get started with NexusPIPE today! 🚀',
    '🚀 NexusPIPE: Where Security Meets Innovation – Try Us Today! 🚀',
    "🚀 Let's CAPTCHA - ture the future together! 🚀",
    '🚀 CAPTCHA Your Peace of Mind with NexusPIPE Today! 🚀',
  ],
  'uvc-str-rng': [
    `🚀 Let's CAPTCHA - ture the future together! 🚀`,
    '🚀 CAPTCHA Your Peace of Mind with NexusPIPE Today! 🚀',
    `🤖 NexusUVC: Human-solvable CAPTCHAs that properly defeat bots. 🤖`,
  ],
};

export const AnnouncementBarContent = props => {
  const { announcementBar } = useThemeConfig();
  const { content } = announcementBar;
  useEffect(() => {
    (async () => {
      let banner = document.getElementById('banner');
      if (!banner)
        while (!banner) {
          banner = document.getElementById('banner');
          if (!banner) await new Promise(r => setTimeout(r, 100));
        }
      banner.innerHTML = rngStrings[content]
        ? rngStrings[content][
            Math.floor(Math.random() * rngStrings[content].length)
          ]
        : content;
    })();
  });
  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: rngStrings[content] ? '' : content }}
      id="banner"
    />
  );
};

export default AnnouncementBarContent;
