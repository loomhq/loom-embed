import { isLoomUrl, isValidEmbedUrl } from './validate';

import { LOOM_HOSTNAME_CAPTURE } from './common';

const SRC_URL_REGEX = /src=["']+(https?:\/\/[a-zA-z\d:\.\/?&]+)/

const getResponsiveEmbedCode = (embedURL, heightAspectRatio) => {
  const padding = `${heightAspectRatio * 100}%`;
  const wrapperStyles = `position: relative; padding-bottom: ${padding}; height: 0;`;
  const iframeStyles = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';

  return `<div class="lo-emb-vid" style="${wrapperStyles}"><iframe src="${embedURL}" ` +
    'frameborder="0" webkitallowfullscreen mozallowfullscreen ' +
    `allowfullscreen style="${iframeStyles}"></iframe></div>`;
};

const enhanceEmbedCode = (videoData, options) => {
  // If needed, we alter the embed code to
  // support responsive code

  const { width, height } = options;
  const { width: videoWidth, height: videoHeight } = videoData;

  if (!width && !height) {
    const [, embedUrl] = videoData.html.match(SRC_URL_REGEX);

    const aspectRatio = videoHeight / videoWidth;

    return {
      ...videoData,
      html: getResponsiveEmbedCode(embedUrl, aspectRatio)
    }
  } else {
    return videoData;
  }
}

const buildLoomOembedUrl = (url, options) => {
  const { width, height } = options;
  const maxWidth = width ? `&maxwidth=${width}` : '';
  const maxHeight = height ? `&maxheight=${height}` : '';

  const [loomDomain] = url.match(LOOM_HOSTNAME_CAPTURE);
  let loomBaseDomain = loomDomain;

  if (loomDomain === 'loom.com') {
    loomBaseDomain = `www.${loomDomain}`;
  }

  return `https://${loomBaseDomain}/v1/oembed?url=${url}${maxWidth}${maxHeight}`;
};

const buildOembedUrl = (url, options) => {
  if (isLoomUrl(url)) {
    return buildLoomOembedUrl(url, options);
  } else {
    throw new Error('URL is not from a supported video provider')
  }
};

const oembed = (linkUrl, options = {}) => {
  const isSupportedUrl = isValidEmbedUrl(linkUrl);

  if (isSupportedUrl) {
    return fetch(buildOembedUrl(linkUrl, options))
      .then(resp => resp.json())
      .then(videoData => enhanceEmbedCode(videoData, options))
      .catch(() => { throw new Error('Unable to fetch oembed data') });
  } else {
    throw new Error('URL is not from a supported video provider');
  }
};

export default oembed;
