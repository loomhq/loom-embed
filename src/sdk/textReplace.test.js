import textReplace from './textReplace';
import * as oembed from './oembed';

describe('textReplace', () => {
  beforeEach(() => {
    oembed.default = jest.fn();
  });

  afterEach(() => {
    oembed.default.mockRestore();
  });

  test('replaces any occurrances of loom links with the embed code', async () => {
    const mockData1 = {
      url: 'https://www.loom.com/share/def456',
      html: '<iframe src="https://www.loom.com/share/def456"></iframe>'
    };

    const mockData2 = {
      url: 'https://www.loom.com/share/123abc',
      html: '<iframe src="https://www.loom.com/share/123abc"></iframe>'
    };

    const mockData3 = {
      url: 'https://www.loom.com/share/abc123',
      html: '<iframe src="https://www.loom.com/share/abc123"></iframe>'
    };

    oembed.default.mockReturnValueOnce({ html: mockData1.html });
    oembed.default.mockReturnValueOnce({ html: mockData2.html });
    oembed.default.mockReturnValueOnce({ html: mockData3.html });

    const sampleString = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor ${mockData1.url} ut labore et dolore
    magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra. Ac
    felis donec et odio pellentesque.

    ${mockData2.url}

    Tincidunt augue interdum velit euismod in pellentesque. Nullam non nisi est
    sit amet facilisis magna etiam. Ut enim blandit volutpat maecenas volutpat
    blandit. ${mockData3.url} Sed tempus
    urna et pharetra pharetra massa massa ultricies mi. Imperdiet nulla malesuada
    pellentesque elit eget gravida cum sociis.
    `;

    const replacedText = await textReplace(sampleString);

    const expectedString = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor ${mockData1.html} ut labore et dolore
    magna aliqua. Sit amet justo donec enim diam vulputate ut pharetra. Ac
    felis donec et odio pellentesque.

    ${mockData2.html}

    Tincidunt augue interdum velit euismod in pellentesque. Nullam non nisi est
    sit amet facilisis magna etiam. Ut enim blandit volutpat maecenas volutpat
    blandit. ${mockData3.html} Sed tempus
    urna et pharetra pharetra massa massa ultricies mi. Imperdiet nulla malesuada
    pellentesque elit eget gravida cum sociis.
    `;

    expect(replacedText).toEqual(expectedString)
  });
});
