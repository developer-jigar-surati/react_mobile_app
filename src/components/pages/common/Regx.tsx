// Email Address is not valid.
export const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// Contact no regx
export const contactNoRegx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/; /* eslint-disable-line no-useless-escape */
// onlyAllow Alphanumeric, space, hyphen (-) and underscore (_) only.
export const onlyAllowRegx = /^[0-9a-zA-Z-_\ ]+$/; /* eslint-disable-line no-useless-escape */

export const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; /* eslint-disable-line no-useless-escape */