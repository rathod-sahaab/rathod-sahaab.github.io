<script lang="ts">
	import {
		SKILLS,
		SKILL_TAGS,
		type ISkillTag,
		SKILLS_CATEGORY_NAME_MAP,
		SKILLS_CATEGORY_COUNT_MAP,
	} from '$lib/constants/skills'
	import FilterTabs from '$lib/filter-tabs.svelte'
	import Skill from './skill.svelte'

	let activeTag: ISkillTag = 'languages'
	let setTag = (tag: ISkillTag) => (activeTag = tag)

	$: skills = SKILLS.filter((skill) => skill.tag === activeTag)
</script>

<svelte:head>
	<title>Skills | Abhay.RS</title>
</svelte:head>

<!-- TODO: Skill tree -->
<section class="pt-24">
	<div class="flex justify-center items-center mb-12">
		<FilterTabs
			tags={SKILL_TAGS}
			{activeTag}
			{setTag}
			tagHumanStringMap={SKILLS_CATEGORY_NAME_MAP}
			tagInstanceCountMap={SKILLS_CATEGORY_COUNT_MAP}
		/>
	</div>

	<div class="sm:max-w-screen-sm md:max-w-screen-md m-auto grid grid-cols-1 md:grid-cols-2 gap-2">
		{#each skills as skill}
			<Skill {skill} />
		{/each}
	</div>
</section>
