# Button Docs

Buttons are used to trigger an event or action.

## Base Example

<style>
 .im-button {
  margin-right: 8px;
  margin-bottom: 8px;
 }

</style>

<script setup>
import {ImIconSearch} from 'im-design'

</script>

<im-button color="default">This Button</im-button>
<im-button color="success">This Button</im-button>
<im-button color="warning">This Button</im-button>
<im-button color="error">This Button</im-button>
<im-button color="primary">This Button</im-button>

```html
<im-button color="success">This Button</im-button>
<im-button color="info">This Button</im-button>
<im-button color="warning">This Button</im-button>
<im-button color="error">This Button</im-button>
<im-button color="primary">This Button</im-button>
```

## Shape Example

`round` `square` `circle` are available for shape.

<im-button color="success" shape="round">This Button</im-button>
<im-button color="warning" shape="circle"><ImIconSearch width="18" height="18" /></im-button>
<im-button color="primary" shape="square"><ImIconSearch width="18" height="18" /></im-button>

```html
<im-button color="success" shape="round">This Button</im-button>
<im-button color="warning" shape="circle"
  ><ImIconSearch width="18" height="18"
/></im-button>
<im-button color="primary" shape="square"
  ><ImIconSearch width="18" height="18"
/></im-button>
```

## Size Example

`32`, `36`, `40`, `48` Number are available for size.

<im-button color="success" size="32">This is a Button</im-button>
<im-button color="warning" size="36">This is a Button</im-button>
<im-button color="primary" size="40">This is a Button</im-button>
<im-button color="error" size="48">This is a Button</im-button>

```html
<im-button color="success" size="32">This is a Button</im-button>
<im-button color="warning" size="36">This is a Button</im-button>
<im-button color="primary" size="40">This is a Button</im-button>
<im-button color="error" size="48">This is a Button</im-button>
```

## Variants Example

`text`, `outlined`, `tonal` are available for variants.

<im-button color="success" variant="text">This Button</im-button>
<im-button color="warning" variant="outlined">This Button</im-button>
<im-button color="primary" variant="tonal">This Button</im-button>

```html
<im-button color="success" variant="text">This Button</im-button>
<im-button color="warning" variant="outlined">This Button</im-button>
<im-button color="primary" variant="tonal">This Button</im-button>
```

## Loading Example

<im-button color="success" loading>This Button</im-button>
<im-button color="warning" loading>This Button</im-button>
<im-button color="primary" loading>This Button</im-button>
<im-button color="error" loading>This Button</im-button>

```html
<im-button color="success" loading>This Button</im-button>
<im-button color="warning" loading>This Button</im-button>
<im-button color="primary" loading>This Button</im-button>
<im-button color="error" loading>This Button</im-button>
```

## Disabled Example

<im-button color="success" disabled>This Button</im-button>
<im-button color="warning" disabled>This Button</im-button>
<im-button color="primary" disabled>This Button</im-button>
<im-button color="error" disabled>This Button</im-button>

```html
<im-button color="success" disabled>This Button</im-button>
<im-button color="warning" disabled>This Button</im-button>
<im-button color="primary" disabled>This Button</im-button>
<im-button color="error" disabled>This Button</im-button>
```
