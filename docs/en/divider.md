# Divider Component

A divider line that separates content.

## Basic Usage

This is some text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.
<ImDivider>Text</ImDivider>
Next paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.

```vue
<template>
  This is some text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
  nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
  quo modo.
  <ImDivider>Text</ImDivider>
  Next paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
  merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
  modo.
</template>
```

## Text Positioning

Use `textLeftWidth` and `textRightWidth` to adjust the divider area and achieve text offset

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.
<ImDivider textLeftWidth="50px">Text</ImDivider>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
te dicta? Refert tamen, quo modo.

```vue
<template>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
  <ImDivider textLeftWidth="50px">Text</ImDivider>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
</template>
```

## Vertical Divider

Hello <ImDivider vertical /> World

```vue
<template>Hello <ImDivider vertical /> World</template>
```

## APIs