<script lang="ts">
	import { onMount } from 'svelte'
	import { PAGES } from '$lib/constants/pages'
	import { afterNavigate } from '$app/navigation'
	import { base } from '$app/paths'

	let currentPath: string = PAGES[0].href

	function refreshCurrentPath() {
		currentPath = window.location.pathname
	}

	onMount(refreshCurrentPath)
	afterNavigate(refreshCurrentPath)
</script>

<nav class="fixed top-0 left-1/2 -translate-x-1/2 p-4 z-10">
	<div
		class="absolute z-10 top-0 left-1/2 -translate-x-1/2 transition-colors -translate-y-[84%] w-[200%] aspect-square rounded-full bg-base-200"
	/>
	<ul
		class="relative flex text-xl z-20 justify-center -0 w-full [&>li:not(:last-child)]:mr-12 [&>*]transition-all [&>*]:duration-150"
	>
		{#each PAGES as page}
			<li class={currentPath === page.href ? 'text-3xl hover:scale-110' : 'hover:scale-125'}>
				<h3>
					<a href={base + page.href}>{page.name}</a>
				</h3>
			</li>
		{/each}
	</ul>
</nav>
