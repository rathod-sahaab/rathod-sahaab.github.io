<script>
	import { onMount } from 'svelte'
	import { PAGES } from '$lib/constants/pages'
	import { afterNavigate } from '$app/navigation'

	let currentPath = PAGES[0].href

	function refreshCurrentPath() {
		currentPath = window.location.pathname
	}

	onMount(refreshCurrentPath)
	afterNavigate(refreshCurrentPath)
</script>

<nav class="w-full fixed top-0 p-4">
	<ul
		class="flex text-xl justify-center -0 w-full [&>li:not(:last-child)]:mr-12 [&>*]transition-all [&>*]:duration-150"
	>
		{#each PAGES as page}
			<li class={currentPath === page.href ? 'text-3xl hover:scale-110' : 'hover:scale-125'}>
				<a href={page.href}>{page.name}</a>
			</li>
		{/each}
	</ul>
</nav>
