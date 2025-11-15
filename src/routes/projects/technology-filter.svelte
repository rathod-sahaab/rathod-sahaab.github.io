<script lang="ts">
	import { PROJECTS, TAG_PROJECTS_COUNT_MAP } from '$lib/constants/projects'
	import { TECHNOLOGY_MAP, type ITechnologyTag } from '$lib/constants/technologies'
	import FilterTabs from '$lib/filter-tabs.svelte'
	import { type IFilterTag } from '$lib/types/filter-tags'

	export let activeTag: ITechnologyTag
	export let setTag: (tag: ITechnologyTag) => void

	const projectTags = [...new Set<ITechnologyTag>(PROJECTS.flatMap((project) => project.tagIds))]

	const tags: IFilterTag<ITechnologyTag>[] = [
		{
			tag: 'all',
			name: 'All',
			count: PROJECTS.length,
		},
		...projectTags.map((tag) => ({
			tag,
			name: TECHNOLOGY_MAP[tag],
			count: TAG_PROJECTS_COUNT_MAP[tag] ?? 0,
		})),
	]
</script>

<FilterTabs {tags} {activeTag} {setTag} />
