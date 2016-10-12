## EventForm Component
A component that handles event creation.

### Example

```js
<EventForm
  {...fields}
  invalid={invalid}
  onAddGuest={this.handleAddingGuest}
  onRemoveGuest={this.handleRemovingGuest}
  guestList={guestList}
  eventTypes={eventTypes}
  pastHosts={hosts}
  pastGuests={guests}
  onSubmit={this.handleSubmit}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **onSubmit**    | Func   |             | Any function value
| **pastGuests**    | Array   |             | An array of past guests
| **eventTypes**    | Array   |             | An array of event types
| **guestList**    | Array   |             | The current guest list for the submission
| **onRemoveGuest**    | Func   |             | Any function value
| **onAddGuest**    | Func   |             | Any function value
| **invalid**    | Bool   |             | Boolean to determine if the form is valid or not
