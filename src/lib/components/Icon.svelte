<script lang="ts">
    import * as mdiJs from '@mdi/js';
    import { classnames } from './utils';
  
    export let name:string = 'account';
    export let color:string = 'black';
    export let size:string = '24';

    const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || '';
  
    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `inline-block text-${color}`
    );
  </script>
  
<svg
    {...$$restProps}
    class={classes}
    style="{`width:${size}px;height:${size}px;`}"
    viewbox="{`0 0 24 24`}"
>
    <path d={mdiJs['mdi'+capitalize(name)]} />
</svg>

<style>
    svg {
        fill: currentColor;
    }
</style>