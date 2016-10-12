## LoginForm Component
A reusable login form component.

### Example

```js
<LoginForm
  {...fields}
  onSubmit={this.handleSubmit}
  invalid={invalid}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **invalid**    | Boolean   |             | Redux form, invalid parameter
| **passwordInput**    | Object   |             | Redux form, password Input
| **emailInput**    | Object   |             | Redux form, email Input
| **onSubmit**    | Func   |             | Redux form, callback func for submission


### Other Information
This component relies on redux form.  See the LoginContainer for example usage.
