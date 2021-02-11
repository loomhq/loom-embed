const LOOM_BASE_REGEX_STR = '(?:https?:\/\/)?((?:stage\.loom\.com|loom\.com|www\.loom.com|loomlocal\.com:4444)\/share\/[a-f0-9]+)';

export const LOOM_URL_REGEX = new RegExp(`^${LOOM_BASE_REGEX_STR}$`);
export const LOOM_URL_MATCH_REGEX = new RegExp(`${LOOM_BASE_REGEX_STR}`, 'g');
export const LOOM_HOSTNAME_CAPTURE = /(www\.loom\.com|loom\.com|stage\.loom\.com|loomlocal\.com:4444)/i;

export const LINK_REPLACED_CLASS = 'lo-link-replaced';
