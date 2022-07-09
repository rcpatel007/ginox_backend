export const constants = {
  PORT: process.env.PORT || 8000,
  HOST_URL: process.env.HOST_URL || 'http://localhost:8000',
  IS_PROD: process.env.NODE_ENV == 'production' ? true : false,
  SESSION_SECRET: process.env.SESSION_SECRET,
  PUBLIC_PATH: 'src/public',
  LOGO_URL: `${process.env.HOST_URL}/static/images/072591b7-4aec-44d9-8fe7-3329193d8a3c-cookeryMeeting.png`,
  ADMIN_SECRET: process.env.ADMIN_SECRET,
  DEFAULT_TIMEZONE: 'Asia/Kolkata', // 'Australia/Melbourne',
  DATE_FORMAT: 'YYYY-MM-DD',
  MODE: process.env.MODE,
};
