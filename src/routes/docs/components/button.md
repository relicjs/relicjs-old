---
title: Button
label: Button
---

<script>
    import Button from '$lib/components/Button.svelte';
</script>

# {title}

## Example

<Button color="primary">{label}</Button>
<Button color="accent">{label}</Button>
<Button color="info">{label}</Button>
<Button color="error">{label}</Button>

## Usage

```html
<script>
    import Button from '$lib/components/Button.svelte';
</script>

<Button color="primary">Click me</Button>
```