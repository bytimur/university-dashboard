module.exports = {
  pages: {
    "*": ["common"],
  },
  i18n: {
    locales: ["ru", "uz"],
    defaultLocale: "ru",
    localeDetection: false,
  },
  reloadOnPrerender: true, //! REMOVE ON PRODUCTION
};
