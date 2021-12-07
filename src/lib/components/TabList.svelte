<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        'tabs'
    );
</script>

<div
    {...$$restProps}
    class={classes}
>
	<slot />
</div>
