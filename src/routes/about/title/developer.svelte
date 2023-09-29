<!-- TODO: Tween -->
<script lang="ts">
	let y: number = 0

	$: develStyle = `transform: translateX(calc(50% - ${2 * y}px))`
	$: operStyle = `transform: translateX(calc(-50% + min(${2 * y}px, 50vw)))`
</script>

<div>
	<h2 class="opacity-20 text-[20vmin] absolute top-10 right-0" style={develStyle}>
		&lt;developer/&gt
	</h2>
	<h2 class="transition-all opacity-20 text-[20vmin] absolute bottom-10 left-0" style={operStyle}>
		&lt;developer/&gt
	</h2>
</div>

<svelte:window bind:scrollY={y} />
