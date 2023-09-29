<script lang="ts">
	import { PROJECTS } from '$lib/constants/projects'
	import type { ITechnologyTag } from '$lib/constants/technologies'
	import Project from './project.svelte'
	import TechnologyFilter from './technology-filter.svelte'

	let projects: typeof PROJECTS = []

	let activeTag: ITechnologyTag = 'all'

	function setTag(tag: ITechnologyTag) {
		if (activeTag !== tag) {
			activeTag = tag
			return
		}
		activeTag = 'all'
	}

	$: projects = PROJECTS.filter(
		(project) => activeTag === 'all' || project.tagIds.includes(activeTag),
	).sort((a, b) => a.priority - b.priority)
</script>

<section class="py-24 flex flex-col items-center [&>*:not(:last-child)]:mb-10">
	<TechnologyFilter {activeTag} {setTag} />
	{#each projects as project}
		<Project {project} {activeTag} {setTag} />
	{/each}
</section>
