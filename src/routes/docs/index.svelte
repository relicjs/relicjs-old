<script>
    import { toast } from '@zerodevx/svelte-toast';
</script>

<h1>Documentation</h1>

<button on:click={() => toast.push('Hello world!')}>EMIT TOAST</button>
