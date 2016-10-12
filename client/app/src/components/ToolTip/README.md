## ToolTip Component
A reusable tooltip component.

### Example

```js
<ToolTip
  isShowing={false}
  onClose={e => e}
>
  <ul>
    <li>1. Do this than that</li>
  </ul>
</ToolTip>
```
isShowing: PropTypes.bool.isRequired,
children: PropTypes.node.isRequired,
onClose: PropTypes.func.isRequired,

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **isShowing**    | Bool   |             | Is the tip showing?
| **onClose**    | Func   |             | The on close callback
| **children**    | Node   |             | React node to show in the tip.


### Other Information
Relies on the grommet tip component. https://grommet.github.io/docs/tip
