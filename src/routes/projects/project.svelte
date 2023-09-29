<script lang="ts">
	import type { PROJECTS } from '$lib/constants/projects'
	import { TECHNOLOGY_MAP } from '$lib/constants/technologies'
	import ExternalLink from './external-link.svelte'

	export let project: (typeof PROJECTS)[number]
</script>

<div class="max-w-[93%] w-[720px]">
	<div>
		<img class="w-full rounded-lg border-2 border-base-300" alt={project.alt} src={project.image} />
	</div>
	<a href={project.link} target="_blank">
		<h3 class="text-xl font-bold my-2">
			{project.title}
			<!-- <IconExternalLink class="inline" /> -->
			<ExternalLink />
		</h3>
	</a>
	<p class="mb-4">{project.description}</p>
	<ul>
		{#each project.tagIds as tag}
			<li class="tag text-base-content inline-block rounded-md p-2 bg-base-200 mr-2">
				{TECHNOLOGY_MAP[tag]}
			</li>
		{/each}
	</ul>
</div>

<style>
	.tag {
		border-color: hsl(var(--bc));
	}
</style>
