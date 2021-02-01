import oembed from './oembed';
import { isValidLinkNode } from './validate';
import { LINK_REPLACED_CLASS } from './common';

const createNodeFromString = (htmlString) => {
  const containerNode = document.createElement('div');

  containerNode.innerHTML = htmlString;

  return containerNode.firstChild;
}

const injectVideo = (linkNode, embedString) => {
  const embedNode = createNodeFromString(embedString);

  linkNode.parentNode.insertBefore(embedNode, linkNode);
};

const linkReplace = (selector = 'a', options = {}, target = document) => {
  const linkNodes = [...target.querySelectorAll(selector)];

  linkNodes
    .filter(isValidLinkNode)
    .forEach(async (node) => {
      const { html } = await oembed(node.href, options);

      injectVideo(node, html);

      node.className = `${node.className} ${LINK_REPLACED_CLASS}`;

      return true;
    });
};

export default linkReplace;