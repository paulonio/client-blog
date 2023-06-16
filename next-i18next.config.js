/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  defaultNS: 'common',
  reloadOnPrerender: true,
  // localePath:
  //   typeof window === 'undefined'
  //     ? // eslint-disable-next-line global-require
  //       require('path').resolve('./my-custom/path')
  //     : '/public/my-custom/path',
  // ns: ['common'],
};
