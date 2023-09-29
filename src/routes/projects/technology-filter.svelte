<script lang="ts">
	import { PROJECTS } from '$lib/constants/projects'
	import { TECHNOLOGY_MAP, type ITechnologyTag } from '$lib/constants/technologies'

	export let activeTag: ITechnologyTag
	export let setTag: (tag: ITechnologyTag) => void

	const tags = new Set(['all' as ITechnologyTag, ...PROJECTS.flatMap((project) => project.tagIds)])
</script>

<div class="p-8 max-w-screen-md">
	{#each tags as tag}
		<button
			class="btn btn-sm m-1 normal-case"
			class:active={tag === activeTag}
			on:click={() => setTag(tag)}
			>{TECHNOLOGY_MAP[tag]}
		</button>
	{/each}
</div>

<style>
	button.active {
		border: 2px solid hsl(var(--bc));
	}
</style>
