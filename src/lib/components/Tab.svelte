<script lang="ts">
    import { classnames } from './utils';

    import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);

    let className = '';
    export { className as class };
    $: classes = classnames(
        className,
        `tab tab-lifted ${$selectedTab === tab && 'tab-active'} mb-3`
    );
</script>

<span
    {...$$restProps}
    class={classes}
    on:click="{() => selectTab(tab)}"
>
    <slot />
</span>
