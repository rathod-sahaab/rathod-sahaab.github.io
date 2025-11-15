<script lang="ts">
	import { onMount } from 'svelte'
	import LineMdMoonFilledAltToSunnyFilledLoopTransition from '~icons/line-md/moon-filled-alt-to-sunny-filled-loop-transition'
	import LineMdSunnyFilledLoopToMoonFilledLoopTransition from '~icons/line-md/sunny-filled-loop-to-moon-filled-loop-transition'
	import EvaColorPaletteOutline from '~icons/eva/color-palette-outline'

	const DAISY_THEMES = [
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
	] as const

	type ITheme = 'light' | 'dark' | (typeof DAISY_THEMES)[number]

	let theme: ITheme = 'dark'
	let rainbowIndex: number | undefined = undefined

	onMount(() => {
		const savedTheme = (localStorage.getItem('theme') as ITheme) || 'dark'
		theme = savedTheme

		if (theme !== 'light' && theme !== 'dark') {
			rainbowIndex = DAISY_THEMES.indexOf(theme)

			if (rainbowIndex === -1) {
				theme = 'dark'
				rainbowIndex = undefined
			}
		}
	})

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark'
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}

	function toggleRainbow() {
		if (!rainbowIndex) {
			rainbowIndex = Math.floor(Math.random() * DAISY_THEMES.length)
			theme = DAISY_THEMES[rainbowIndex]
		} else {
			// Cycle to next DaisyUI theme
			rainbowIndex = (rainbowIndex + 1) % DAISY_THEMES.length
			theme = DAISY_THEMES[rainbowIndex]
		}
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}
</script>

<button
	on:click={toggleTheme}
	class="btn btn-ghost btn-circle text-2xl fixed bottom-20 md:top-4 right-4 z-50"
	aria-label="Toggle dark/light theme"
	title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if theme === 'dark'}
		<LineMdMoonFilledAltToSunnyFilledLoopTransition />
	{:else}
		<LineMdSunnyFilledLoopToMoonFilledLoopTransition />
	{/if}
</button>
<button
	on:click={toggleRainbow}
	class="btn btn-ghost btn-circle text-2xl fixed bottom-4 right-4 z-50"
	aria-label="Cycle DaisyUI rainbow themes"
	title={'Colorful mode'}
>
	<EvaColorPaletteOutline />
</button>
