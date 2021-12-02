---
title: Alert
---

<script>
    import Alert from '$lib/components/Alert.svelte';
</script>

# {title}

## Example

<Alert color="default">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
<Alert color="info">Lorem ipsum dolor sit amet, consectetur adip!</Alert>
<Alert color="success">Lorem ipsum dolor sit amet, consectetur adip!</Alert>

## Usage

```html
<script>
    import Alert from '$lib/components/Alert.svelte';
</script>

<Alert color="primary">There was a problem.</Alert>
```