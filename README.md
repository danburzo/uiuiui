# uiuiui

Simple, accessible, React controls and form elements.

See an [online demo](https://danburzo.github.io/uiuiui/storybook-static) created with [Storybook](https://storybook.js.org).

## Usage

Install uiuiui as a dependency to your project:

```bash
$ npm add --dev uiuiui
```

It's bundled for both CJS and ES modules, so either way of using it works:

```js
let uiuiui = require('uiuiui'); // CommonJS
import { Slider } from 'uiuiui'; // ES Modules
```

You also need some way to import the CSS into your project:

```js
import "uiuiui/build/uiuiui.css"
```

## Rationale

When I started working on this React UI component library, there were a few things I had in mind:

### Interaction: Subtlety and accessibility

A control should react to all the [subtle interactions available in a browser](https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67), which sometimes tend to be ignored. [Inclusive Components](https://inclusive-components.design/) by Heydon Pickering is an example of things to be mindful of.

### CSS: Responsiveness and flexibility

A control should delegate as much of the styling as possible to the user, and provide helpful hooks for them to do so. It should be unassuming about the context in which it's going to be used, and that means steering clear of hardcoded dimensions and other anti-patterns which may crop up in React projects.

The project uses a consistent CSS naming system based on the BEM methodology, which I've found makes more sense for me when building complex interfaces.

### Architecture: Structure and clarity

The project aims to provide the user with useful primitives with which to build they can build their own controls. That means keeping all the components short and sweet, so that rewriting any of them to match your needs is not a hassle. Everything should be swappable.

### Comprehensively documented

Along with its main use as a component library to be used directly, the code should be clear and heavily annotated to provide information on how each component is built, how it works, and how one might implement similar components.

## API Reference

* [Input](./components/Input/README.md)
* [List](./components/List/README.md)
* [MultiSlider](./components/MultiSlider/README.md)
* [Pad](./components/Pad/README.md)
* [Popup](./components/Popup/README.md)
* [Portal](./components/Portal/README.md)
* [Position](./components/Position/README.md)
* [Select](./components/Select/README.md)
* [Slider](./components/Slider/README.md)
* [Surface](./components/Surface/README.md)

## Development

[CONTRIBUTING.md](./CONTRIBUTING.md)

## See also

* [uiuiui-color](https://github.com/danburzo/uiuiui-color)
* [uiuiui-music](https://github.com/danburzo/uiuiui-music)
* [uiuiui-patterns](https://github.com/danburzo/uiuiui-patterns)

## Open Source

This project uses [d3-scale](https://github.com/d3/d3-scale) and [react-event-listener](https://github.com/oliviertassinari/react-event-listener).

