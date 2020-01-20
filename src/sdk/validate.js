import { LINK_REPLACED_CLASS, LOOM_URL_REGEX } from './common';

export const isLoomUrl = (url) => LOOM_URL_REGEX.test(url);

export const isValidEmbedUrl = (url) => isLoomUrl(url);

export const isValidLinkNode = (node) => (
  node.nodeName === 'A' &&
  !node.className.includes(LINK_REPLACED_CLASS) &&
  isValidEmbedUrl(node.href)
);

export default {
  isLoomUrl
};
