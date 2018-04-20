# List

Lists let the user chose one value from a set of values.

## Properties

Property | Type | Default | Description
-------- | ---- | ------- | -----------
`className` | String | _none_ | Any additional class names to pass to the component.
`tabIndex` | Integer | `0` | The component's tab index.
`property` | Any | _none_ | [An optional identifier][property] to pass along to the callback functions.
`value` | Any | _none_ |
`onChange` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.
`onSelect` | Function | _none_ | When the `property` prop is set, it will be passed back as the second argument.

## Built-in Children

### ListItem

## CSS

Lists have the class name __`uix-list`__. List items have the class name __`uix-list__item`__.


[property]: https://github.com/danburzo/react-recipes/blob/master/recipes/property-pattern.md
