<script lang="ts">
	import { PROJECTS } from '$lib/constants/projects'
	import { TECHNOLOGY_MAP, type ITechnologyTag } from '$lib/constants/technologies'
	import { onMount } from 'svelte'
	import Project from './project.svelte'
	import TechnologyFilter from './technology-filter.svelte'
	import { getTagFromQuery, removeQueryParam, setQueryParams } from '$lib/query'

	const PROJECT_FILTER_QUERY_PARAM = 'tech' as const

	let projects: typeof PROJECTS = []

	let activeTag: ITechnologyTag = 'all'

	function setTag(tag: ITechnologyTag) {
		if (activeTag !== tag) {
			setQueryParams({ key: PROJECT_FILTER_QUERY_PARAM, value: tag })
			activeTag = tag
			return
		}
		activeTag = 'all'
	}

	onMount(() => {
		const tag = getTagFromQuery({ key: PROJECT_FILTER_QUERY_PARAM }) as ITechnologyTag
		if (tag && TECHNOLOGY_MAP[tag]) {
			activeTag = tag
		} else {
			removeQueryParam({ key: PROJECT_FILTER_QUERY_PARAM })
		}
	})

	$: projects = PROJECTS.filter(
		(project) => activeTag === 'all' || project.tagIds.includes(activeTag),
	).sort((a, b) => a.priority - b.priority)
</script>

<svelte:head>
	<title>Projects | Abhay.RS</title>
</svelte:head>

<section class="py-24 flex flex-col items-center [&>*:not(:last-child)]:mb-10">
	<TechnologyFilter {activeTag} {setTag} />
	{#each projects as project}
		<Project {project} {activeTag} {setTag} />
	{/each}
</section>
