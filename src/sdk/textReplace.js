import oembed from './oembed';
import { LOOM_URL_MATCH_REGEX, LOOM_URL_REGEX } from './common';

const normalizeUrls = (url) => {
  const [,,, loomBaseUrl] = url.match(LOOM_URL_REGEX);

  return {
    originalUrl: url,
    requestUrl: `https://${loomBaseUrl}`
  };
};

const textReplace = async (textString, options) => {
  const embedPromises = textString
    .match(LOOM_URL_MATCH_REGEX)
    .map(normalizeUrls)
    .map(async (urls) => {
      const { html } = await oembed(urls.requestUrl, options)

      return {
        ...urls,
        embedCode: html
      };
    });

  const embedData = await Promise.all(embedPromises);

  return embedData
    .reduce((acc, curr) => {
      const { originalUrl, embedCode } = curr;
      const urlReplaceRegex = new RegExp(originalUrl, 'g');

      return acc.replace(urlReplaceRegex, embedCode);
    }, textString);
};

export default textReplace;
