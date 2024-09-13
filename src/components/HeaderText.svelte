<script lang="ts">
	export let headerText1 = '';
	export let headerText2 = '';
</script>

<span class={'headerText1'}>
	{headerText1}
</span>
<span class={'headerText2'}>
	{headerText2}
</span>

<style lang="scss">
	.headerText1 {
		color: var(--primary-text);
		-webkit-text-stroke: 1px var(--background-dark);
		text-stroke: 1px var(--background-dark);
		text-transform: uppercase;
	}

	.headerText2 {
		color: var(--background-dark);
		-webkit-text-stroke: 1px var(--primary-text);
		text-stroke: 1px var(--primary-text);
		text-transform: uppercase;
	}
</style>
