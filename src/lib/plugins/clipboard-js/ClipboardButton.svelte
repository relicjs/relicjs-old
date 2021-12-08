<script>
    // Svelte imports
    import { onMount } from 'svelte';
    // Plugin lib imports
    import { Button } from '$lib/components';
    // Sveltestrap imports
    import ClipboardJS from 'clipboard';

    // Properties
    export let target; // DOM element selector (id, class, etc)
    export let cutText = false; // if true cuts text instead of just copying it
    export let keepTextSelected = false;

    // Event callbacks
    export let success = (action, text, trigger) => {}; // callback on success
    export let error = (action, trigger) => {}; // callback on error

    onMount(() => {
        let clipboard = new ClipboardJS('button');

        clipboard.on('success', function(e) {
            success(e.action, e.text, e.trigger);

            if (!keepTextSelected)
                e.clearSelection();
        });

        clipboard.on('error', function(e) {
            error(e.action, e.trigger);
        });
    });
</script>

<Button
    {...$$restProps}
    data-clipboard-target="{target}"
    data-clipboard-action="{cutText ? 'cut' : 'copy'}"
>
    <slot />
</Button>