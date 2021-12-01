<script context="module" lang="ts">
    export type DropdownPosition = 'end' | 'top' | 'left' | 'right';
</script>

<script lang="ts">
    import { classnames } from './utils';

    export let position:DropdownPosition = 'primary' as DropdownPosition;
    export let label:string = '';
    export let hover:boolean = false;
    export let open:boolean = false;

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `dropdown`
    );
</script>

<div class={classes}>
    <div tabindex="0" class="m-1 btn">{label}</div> 
    <slot />
</div>
  