<script lang="ts">
	import type { PROJECTS } from '$lib/constants/projects'
	import { TECHNOLOGY_MAP, type ITechnologyTag } from '$lib/constants/technologies'
	import ExternalLink from './external-link.svelte'

	export let project: (typeof PROJECTS)[number]
	export let activeTag: ITechnologyTag
	export let setTag: (tag: ITechnologyTag) => void
</script>

<div class="max-w-[512px] w-[93%]">
	<div>
		<img class="w-full rounded-lg border-2 border-base-300" alt={project.alt} src={project.image} />
	</div>
	<a href={project.link} target="_blank">
		<h3 class="text-xl font-bold my-2">
			<ExternalLink />
			{project.title}
			<!-- <IconExternalLink class="inline" /> -->
		</h3>
	</a>
	<p class="mb-4">{project.description}</p>
	<ul>
		{#each project.tagIds as tag}
			<button
				class="btn btn-sm rounded-sm mr-2 normal-case"
				class:active={activeTag === tag}
				on:click={() => setTag(tag)}
			>
				{TECHNOLOGY_MAP[tag]}
			</button>
		{/each}
	</ul>
</div>

<style>
	button.active {
		border: 2px solid hsl(var(--bc));
	}
</style>
