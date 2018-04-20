# Input

`TextInput` gets its initial value from the `value` props, and subsequently reflects whatever the user is typing in the input (its `transient_value`). If, in the process of typing, the input's value conforms to a certain `format`, emit the `onChange` event. If the `value` is `undefined`, display an empty string in the input.

## TextInput

### Properties

Property | Type | Default | Description
-------- | ---- | ------- | -----------
`property` | Any | _none_ | [An optional identifier][property] to pass along to the callback functions.
`className` | String | _none_ | Any additional class names to pass to the component.
`tabIndex` | Integer | `0` | The component's tab index.
`autofocus` | Boolean | `false` | Whether the component should autofocus when it's mounted in the DOM.
`value` | String | _none_ | The input's initial value. Whenever the component receives a new value from its parent, it will reset the component's inner state to match that value.
`onChange` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onStart` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onEnd` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onPrev` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onNext` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`valid` | Function | `() => true` | 
`format` | Function | `value => value` |

### CSS

TextInput components have the class name __`uix-input`__.

## NumericInput

### Properties

Property | Type | Default | Description
-------- | ---- | ------- | -----------
`property` | Any | _none_ | [An optional identifier][property] to pass along to the callback functions.
`className` | String | _none_ | Any additional class names to pass to the component.
`tabIndex` | Integer | `0` | The component's tab index.
`autofocus` | Boolean | `false` | Whether the component should autofocus when it's mounted in the DOM.
`value` | Number | _none_ | The input's initial value. Whenever the component receives a new value from its parent, it will reset the component's inner state to match that value.
`cyclical` | Boolean | `false` | Whether the input should cycle the value when reaching the interval edges.
`step` | Number | `1` | The step to use when changing the value with the Up / Down arrow keys. For steps that are fractions, always use an appropriate `precision` as well, to avoid floating-point errors.
`precision` | Number | `0` | The number of decimals to round the value to. 
`increment` | ? | `e => e ? (e.shiftKey ? 10 : 1) : undefined` |
`start` | Number | `0` | The _starting value_ for the range.
`end` | Number | `100` | The _end value_ for the range. It's not necessary to have `start < end`, as the NumericInput works well even with inverted ranges.
`onChange` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onStart` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onEnd` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.

### Built-in children

#### NumericInputControls

### CSS

NumericInput components have the class names __`uix-input uix-input--numeric`__.


[property]: https://github.com/danburzo/react-recipes/blob/master/recipes/property-pattern.md