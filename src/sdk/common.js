// Regex url for staging, production, and local development
const LOOM_BASE_REGEX_STR = '(https?:\/\/)?(www\.|stage\.)?((use)?(loom|loomlocal)\.com(:4444)?\/share\/[a-f0-9]+)';

export const LOOM_URL_REGEX = new RegExp(`^${LOOM_BASE_REGEX_STR}$`);
export const LOOM_URL_MATCH_REGEX = new RegExp(`${LOOM_BASE_REGEX_STR}`, 'g');
export const LOOM_HOSTNAME_CAPTURE = /((use)?loom)+\.com/i;

export const LINK_REPLACED_CLASS = 'lo-link-replaced';
