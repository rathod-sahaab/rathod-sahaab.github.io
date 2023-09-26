<script lang="ts">
	let y: number = 0

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
		class="absolute z-10 top-0 left-1/2 -translate-x-1/2 transition-colors -translate-y-[89%] w-[180%] aspect-square mask mask-pentagon bg-base-200"
		style={y < 60 ? 'background: hsl(var(--b1))' : ''}
	/>
	<ul
		class="relative flex text-xl z-20 justify-center -0 w-full [&>li:not(:last-child)]:mr-6 sm:[&>li:not(:last-child)]:mr-12 [&>*]transition-all [&>*]:duration-150"
	>
		{#each PAGES as page}
			<li
				class:active={page.href.startsWith('/') &&
					(currentPath === base + page.href || currentPath + '/' === base + page.href)}
			>
				<h3>
					<!-- prepend base if relative url -->
					<a {...page} href={page.href.startsWith('/') ? base + page.href : page.href}>
						{page.name}
					</a>
				</h3>
			</li>
		{/each}
	</ul>
</nav>

<svelte:window bind:scrollY={y} />

<style>
	li:hover {
		scale: 1.2;
	}

	li.active {
		scale: 1.25;
		text-decoration: underline;
		text-underline-offset: 20%;
	}
</style>
