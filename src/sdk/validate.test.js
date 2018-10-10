import { isValidLinkNode, isValidEmbedUrl } from './validate';
import { LINK_REPLACED_CLASS } from './common';

describe('isValidEmbedUrl', () => {
  test('Accepts Loom URLs', () => {
    expect(isValidEmbedUrl('https://www.useloom.com/share/abc123')).toBeTruthy();
    expect(isValidEmbedUrl('http://www.useloom.com/share/abc123')).toBeTruthy();
    expect(isValidEmbedUrl('www.useloom.com/share/abc123')).toBeTruthy();
    expect(isValidEmbedUrl('useloom.com/share/abc123')).toBeTruthy();

    expect(isValidEmbedUrl('https://www.loom.com/share/abc123')).toBeTruthy();
    expect(isValidEmbedUrl('http://www.loom.com/share/abc123')).toBeTruthy();
    expect(isValidEmbedUrl('www.loom.com/share/abc123')).toBeTruthy();
    expect(isValidEmbedUrl('loom.com/share/abc123')).toBeTruthy();
  })

  test('Rejects unsupported providers', () => {
    expect(isValidEmbedUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBeFalsy();
    expect(isValidEmbedUrl('https://vimeo.com/289729765')).toBeFalsy();
  })
})

describe('isValidLinkNode', () => {
  test('Only takes valid <a> nodes', () => {
    const node = {
      nodeName: 'A',
      className: '',
      href: 'https://www.useloom.com/share/abc123'
    };

    expect(isValidLinkNode(node)).toBeTruthy();
  });

  test('Does not pass links already expanded ', () => {
    const node = {
      nodeName: 'A',
      className: LINK_REPLACED_CLASS,
      href: 'https://www.useloom.com/share/abc123'
    };

    expect(isValidLinkNode(node)).toBeFalsy();
  });
});