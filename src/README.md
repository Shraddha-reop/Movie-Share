# orxe-input-field

Input Field define the form input which take input from user and hold specific set of information. Input field in ORXe3 are used to take input data and content, belonging to a specific use case or user action.

## Usage

### Angular / javascript

```html
<!-- Default -->
<orxe-input-field field-label="Default">
</orxe-input-field>

<!-- Input Field - focus  -->
<orxe-input-field state="On-Focus" field-label="On-Focus">
</orxe-input-field>

<!-- Input Field - active  -->
<orxe-input-field state="Active" field-label="Active" value = "Input text" a11y-close-label='close the Input' close-icon>
</orxe-input-field>

<!-- Input Field - filled  -->
<orxe-input-field state="filled" value = "Input text" field-label="Filled">
</orxe-input-field>

<!-- Input Field - error  -->
 <orxe-input-field state="Error" field-label="Error" error>
 </orxe-input-field>

```

## Properties

| Property         | Attribute          | Description                                                        | Type      | Default        |
| ---------------- | ------------------ | ------------------------------------------------------------------ | --------- | -------------- |
| `state`      |         `state`        | It takes two type of nput field                                    | `String`  | 
  `default`    |
| ----------       | -----------        | ------------------------------------------------------------------ | --------  | -------------- |
| `closeIcon`      | `close-icon`       | Property will show the close icon on the `input field`              | `Boolean` |     `false`        |
| ----------       | -----------        | ------------------------------------------------------------------ | --------  | -------------- |
| `a11yCloseLabel` | `a11y-close-label` | Property will set the aria-label for close button                   | `String`  | -------------- |
|  `label`     |    | `field-label`     | Property will set the label of inpit field                          | `String`  |
|--------------|    |-------------------|---------------------------------------------------------------------|-----------|
| `error`      |    |  `error-message`  | Property will show the error message on the `input field`           | `boolean` |
|--------------|    |-------------------|---------------------------------------------------------------------|-----------|