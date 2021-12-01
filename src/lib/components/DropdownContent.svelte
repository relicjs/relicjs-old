<script lang="ts">
    import { classnames } from './utils';

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52`
    );
</script>

<div tabindex="0" class={classes}>
    <slot />
</div>
  