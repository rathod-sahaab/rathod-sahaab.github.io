<script lang="ts">
	import { onMount } from 'svelte'
	import TokenBrandedRainbow from '~icons/token-branded/rainbow'

	const THEMES = [
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
	]

	let currentThemeIndex = 0
	let mounted = false

	onMount(() => {
		const savedTheme = localStorage.getItem('rainbowTheme') || 'light'
		currentThemeIndex = THEMES.indexOf(savedTheme)
		if (currentThemeIndex === -1) currentThemeIndex = 0
		document.documentElement.setAttribute('data-theme', THEMES[currentThemeIndex])
		mounted = true
	})

	function cycleTheme() {
		currentThemeIndex = (currentThemeIndex + 1) % THEMES.length
		const theme = THEMES[currentThemeIndex]
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('rainbowTheme', theme)
	}
</script>

<div class="fixed bottom-4 right-4 z-50 group">
	<button
		on:click={cycleTheme}
		class="btn btn-ghost btn-circle text-2xl"
		aria-label="Cycle through themes"
		title="Cycle through all themes"
	>
		{#if mounted}
			<TokenBrandedRainbow />
		{/if}
	</button>
	{#if mounted}
		<span
			class="absolute right-full mr-2 px-2 py-1 bg-base-300 text-base-content text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
		>
			{THEMES[currentThemeIndex]}
		</span>
	{/if}
</div>
