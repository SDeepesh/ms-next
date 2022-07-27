const getTrackingParams = () => {
  if (typeof window !== undefined) {
    const trackingParamsArray = JSON.parse(localStorage.getItem('ms_tracking_params'));

    const trackingParams = {};

    if (trackingParamsArray) {
      trackingParamsArray.forEach((param) => (trackingParams[param.key] = param.value));
    }
    return trackingParams;
  }
  return null;
};

export default getTrackingParams;
