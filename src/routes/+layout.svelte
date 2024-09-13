<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavBar from '../components/NavBar.svelte';
	import Newsletter from '../components/Newsletter.svelte';

	let currentPage;
	$: currentPage = $page.url.pathname;
</script>

<div class="page-wrapper">
	<NavBar {currentPage}></NavBar>
	<div class="content-wrapper">
		<slot></slot>
	</div>
	<Newsletter></Newsletter>
</div>

<style lang="scss">
	.page-wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.content-wrapper {
		flex-grow: 1;
	}
</style>
