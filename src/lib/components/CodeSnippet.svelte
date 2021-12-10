<script>
    import lolight from 'lolight';
    import { onMount } from 'svelte';
  
    onMount(() => {
      lolight('.lolight')
    })
  </script>
  
  <pre class="lolight">
    <code>
      <slot />
    </code>
  </pre>
  