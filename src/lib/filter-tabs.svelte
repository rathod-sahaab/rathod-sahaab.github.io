<script lang="ts" generics="T extends string">
	export let activeTag: T
	export let setTag: (tag: T) => void

	export let tags: T[]
	export let tagHumanStringMap: Record<T, string>
	export let tagInstanceCountMap: Record<T, number | undefined>
</script>

<div class="p-8 max-w-screen-md">
	{#each tags as tag}
		<button
			class="btn btn-sm rounded-sm m-1 normal-case"
			class:active={tag === activeTag}
			on:click={() => setTag(tag)}
			>{tagHumanStringMap[tag]}
			{#if tagInstanceCountMap[tag]}
				<span class="font-normal max-w-0 transition-all overflow-hidden"
					>| {tagInstanceCountMap[tag]}</span
				>
			{/if}
		</button>
	{/each}
</div>

<style>
	button.active {
		border: 2px solid hsl(var(--bc));
	}

	button.active span,
	button:hover span {
		max-width: unset;
	}
</style>
