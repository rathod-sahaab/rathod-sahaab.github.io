<script lang="ts">
	import { onMount } from 'svelte'
	import LineMdMoonFilledAltToSunnyFilledLoopTransition from '~icons/line-md/moon-filled-alt-to-sunny-filled-loop-transition'
	import LineMdSunnyFilledLoopToMoonFilledLoopTransition from '~icons/line-md/sunny-filled-loop-to-moon-filled-loop-transition'
	let theme: 'light' | 'dark' = 'dark'
	let mounted = false

	onMount(() => {
		const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
		theme = savedTheme
		document.documentElement.setAttribute('data-theme', theme)
		mounted = true
	})

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark'
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}
</script>

<button
	on:click={toggleTheme}
	class="btn btn-ghost btn-circle fixed top-4 right-4 z-50 text-2xl"
	aria-label="Toggle theme"
	title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if mounted}
		{#if theme === 'dark'}
			<LineMdMoonFilledAltToSunnyFilledLoopTransition />
		{:else}
			<LineMdSunnyFilledLoopToMoonFilledLoopTransition />
		{/if}
	{/if}
</button>
