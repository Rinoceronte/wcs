<script lang="ts">
	export let currentPage = '';

	let isMenuOpen = false;

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Calendar', href: '/calendar' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Studios', href: '/studios' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="navbar">
	<button class="hamburger" on:click={toggleMenu}> ☰ </button>
	<ul class:open={isMenuOpen}>
		{#each navLinks as { name, href }}
			<li class="nav-item {currentPage === href ? 'active' : ''}">
				<a
					{href}
					on:click={() => {
						isMenuOpen = false;
					}}>{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: end;
		align-items: center;
		position: relative;
	}

	.navbar ul {
		display: flex;
		gap: 2rem;
		padding: 4px 8px;
	}

	ul li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--primary-text);
	}

	.active a {
		background-color: var(--purple);
		border-radius: 5px;
		padding: 4px;
	}

	/* Mobile responsiveness */
	.hamburger {
		display: none;
		font-size: 24px;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--primary-text);
	}

	/* For mobile screens */
	@media (max-width: 768px) {
		.navbar {
			height: 3rem;
			justify-content: end;
		}

		/* Hide the navigation links initially */
		.navbar ul {
			display: flex;
			gap: 0.25rem;
			flex-direction: column;
			position: absolute;
			top: 100%;
			right: 0;
			z-index: 10;
			padding: 0 1rem;
			background-color: var(--neutral-dark);

			max-height: 0;
			overflow: hidden;
			transition:
				max-height 0.3s ease-in-out,
				padding 0.3s ease;
		}

		.navbar ul.open {
			max-height: 300px;
		}

		.hamburger {
			margin-right: 12px;
			display: block;
		}

		.nav-item {
			padding: 8px;
			text-align: right;
		}
	}
</style>
