# Pad

Pads are two-dimensional surfaces the user can interact with. The [storybook for `Pad`][storybook] contains some examples.

Internally, Pads use [Surfaces](./Surface.md).

## Properties

Property | Type | Default | Description
-------- | ---- | ------- | -----------
`property` | Any | _none_ | [An optional identifier][property] to pass along to the callback functions.
`className` | String | _none_ | Any additional class names to pass to the component.
`tabIndex` | Integer | `0` | The component's tab index.
`x_start` | Number | `0` | 
`x_end` | Number | `100` |
`y_start` | Number | `0` |
`y_end` | Number | `100` |
`x_step` | Number | `1` |
`y_step` | Number | `1` |
`x_precision` | Number | `0` |
`y_precision` | Number | `0` |
`x_increment` | ? | _none_ |
`y_increment` | ? | _none_ |
`x` | Number | _none_ |
`y` | Number | _none_ |
`cyclical` | Boolean | `false` |
`onChange` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onStart` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onEnd` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.

## Children

## Built-in children

#### PadGrid

#### PadHandle

#### PadTooltip

## Variations

### PolarPad

#### Built-in children

* `PolarPadGrid`
* `PolarPadHandle`

### BandPad

#### Built-in children

* `BandPadProgress`

[storybook]: https://danburzo.github.io/uiuiui/storybook-static/?selectedKind=Pad
[property]: https://github.com/danburzo/react-recipes/blob/master/recipes/property-pattern.md