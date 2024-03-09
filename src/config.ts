import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://lmyslinski.com/", // replace this with your deployed domain
  author: "Lukasz Myslinski",
  desc: "My chunk of the internet. I write about web development, programming, and other tech-related stuff.",
  title: "lmyslinski.com",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/lmyslinski",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:lukasz@mlnative.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/lukmyslinski",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
];
