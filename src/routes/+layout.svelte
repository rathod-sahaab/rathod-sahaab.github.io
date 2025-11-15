<script>
	import Navbar from '$lib/navbar.svelte'
	import ThemeRainbowToggle from '$lib/theme-rainbow-switch.svelte'
	import ThemeToggle from '$lib/theme-toggle.svelte'
	import '../app.css'
</script>

<Navbar />
<ThemeToggle />
<ThemeRainbowToggle />
<slot />
