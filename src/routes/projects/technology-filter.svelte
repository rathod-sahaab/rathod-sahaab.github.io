<script lang="ts">
	import { PROJECTS, TAG_PROJECTS_COUNT_MAP } from '$lib/constants/projects'
	import { TECHNOLOGY_MAP, type ITechnologyTag } from '$lib/constants/technologies'
	import FilterTabs from '$lib/filter-tabs.svelte'

	export let activeTag: ITechnologyTag
	export let setTag: (tag: ITechnologyTag) => void

	const tags = new Set<ITechnologyTag>([
		'all' satisfies ITechnologyTag,
		...PROJECTS.flatMap((project) => project.tagIds),
	])
</script>

<FilterTabs
	tags={[...tags]}
	{activeTag}
	{setTag}
	tagHumanStringMap={TECHNOLOGY_MAP}
	tagInstanceCountMap={TAG_PROJECTS_COUNT_MAP}
/>
