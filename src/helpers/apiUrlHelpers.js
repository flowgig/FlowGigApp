export const getFlowGigApiUrl = () => {
  const environmentSlug = process.env.REACT_APP_ENVIRONMENT === 'dev' || process.env.REACT_APP_ENVIRONMENT === 'test' ? process.env.REACT_APP_ENVIRONMENT : 'www';
  return `https://${environmentSlug}.flowgig.com/api`;
};
