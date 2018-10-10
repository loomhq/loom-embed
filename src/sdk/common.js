const LOOM_BASE_REGEX_STR = '(https?:\/\/)?(www\.)?((use)?loom\.com\/share\/[a-f0-9]+)';

export const LOOM_URL_REGEX = new RegExp(`^${LOOM_BASE_REGEX_STR}$`);
export const LOOM_URL_MATCH_REGEX = new RegExp(`${LOOM_BASE_REGEX_STR}`, 'g');

export const LINK_REPLACED_CLASS = 'lo-link-replaced';