<script lang="ts">
	import { PROJECTS, TAG_PROJECTS_COUNT_MAP } from '$lib/constants/projects'
	import { TECHNOLOGY_MAP, type ITechnologyTag } from '$lib/constants/technologies'

	export let activeTag: ITechnologyTag
	export let setTag: (tag: ITechnologyTag) => void

	const tags = new Set<ITechnologyTag>([
		'all' satisfies ITechnologyTag,
		...PROJECTS.flatMap((project) => project.tagIds),
	])
</script>

<div class="p-8 max-w-screen-md">
	{#each tags as tag}
		<button
			class="btn btn-sm rounded-sm m-1 normal-case"
			class:active={tag === activeTag}
			on:click={() => setTag(tag)}
			>{TECHNOLOGY_MAP[tag]}
			{#if TAG_PROJECTS_COUNT_MAP[tag]}
				<span class="font-normal max-w-0 transition-all overflow-hidden"
					>| {TAG_PROJECTS_COUNT_MAP[tag]}</span
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
