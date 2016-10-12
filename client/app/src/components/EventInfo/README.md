## EventInfo Component
A component that takes an event and renders the event's info

### Example

```js
<EventInfo event={event} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **event**    | Object   |             | An object, with the shape shown below

```
event: PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  guests: PropTypes.array.isRequired,
}),
```
