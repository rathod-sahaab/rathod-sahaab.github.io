<script lang="ts">
	import {
		SKILL_TAGS,
		type ISkillTag,
		SKILLS_CATEGORY_NAME_MAP,
		SKILLS_CATEGORY_COUNT_MAP,
	} from '$lib/constants/skills'
	import FilterTabs from '$lib/filter-tabs.svelte'

	let activeTag: ISkillTag = 'languages'
	let setTag = (tag: ISkillTag) => (activeTag = tag)
</script>

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
</section>
