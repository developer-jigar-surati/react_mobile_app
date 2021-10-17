// Alphanumeric, space, hyphen (-) and underscore (_) only allow.
export const onlyAllowMessage = 'Alphanumeric, space, hyphen (-) and underscore (_) only allow.';

export const maxCharAllowMessage = (val: number) => {
    return `Maximum ${val} character allow.`;
};

export const inValidMessage = (val: string) => {
    return `Invalid ${val}.`;
};