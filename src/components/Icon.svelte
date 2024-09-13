<script lang="ts">
	export let name: string;
	export let size: string = '16'; // Default size of 16px
	export let color: string = '#FF0163'; // Default color
</script>

<img
	src={`/src/assets/icons/${name}.svg`}
	alt={name}
	width={size}
	height={size}
	style="fill: {color};"
/>
