const setTrackingParams = (query) => {
  if (typeof window !== 'undefined') {
    const msTrackingParams = JSON.parse(localStorage.getItem('ms_tracking_params'));

    if (!msTrackingParams) {
      const sanitizer = new RegExp(/(^.*)?\?/);
      const regexForLandingPage = new RegExp(/\?(.*)/);
      const landingPage = query.replace(regexForLandingPage, '');

      const sanitizedQueryString = query.replace(sanitizer, '');
      const regex = new RegExp(/utm_(\S+)|(gclid)/);

      const paramsArray = sanitizedQueryString
        .split('&')
        .filter((key) => key.match(regex))
        .map((param) => {
          const keyValue = param.split('=');
          return {
            key: keyValue[0],
            value: keyValue[1],
          };
        });

      paramsArray.push({ key: 'landing-page', value: landingPage });

      localStorage.setItem('ms_tracking_params', JSON.stringify(paramsArray));
    }
  }
};

export default setTrackingParams;
