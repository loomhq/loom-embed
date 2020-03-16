# loom-embed

Easy embedding and link expansion of Loom videos

Also known as:

- The Embed SDK

Visit the [Docs](https://cdn.loom.com/loom-embed/v1.0.4/index.html) for full examples

## Installing

### npm package

```sh
npm install @loomhq/loom-embed
```

### script tag

```html
<script src="https://cdn.loom.com/loom-embed/v1.0.4/sdk.js"></script>
```

See the [CHANGELOG.md](https://github.com/loomhq/loom-embed/blob/master/CHANGELOG.md) for the latest version

## Usage

```js
import loom from '@loomhq/loom-embed'
````

If installed by script tag, the methods are exposed through `window.loom`

## Methods

### .expand(selector, [options])

expands any loom links at the nodes matching the selector

### .textReplace(textString, [options])

Takes a string and replaces any Loom URLs with the embed html

_-> returns a promise_

### .oembed(videoUrl, [options])

oembed metadata from the given video url

_-> returns a promise_

## Options

**The embed code is responsive by default. Only set the width/height values if you require your embed code to be a fixed size**

`width` - [Number] value specifying the max pixel width

`height` - [Number] value specifying the max pixel height


## Development

### Documentation/Examples
For working examples of each method run the local dev server

```
npm start
```

visit `http://localhost:8989/` in your browser

### Running tests
```
npm test
```
