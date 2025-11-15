<script>
	import Navbar from '$lib/navbar.svelte'
	import ThemeSwitcher from '$lib/theme-switcher.svelte'
	import '../app.css'
</script>

<Navbar />
<ThemeSwitcher />
<slot />
