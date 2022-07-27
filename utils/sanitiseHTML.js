import xss from 'xss';

const sanitizeHTML = (unsafeHTML) => xss(unsafeHTML);

export default sanitizeHTML;
