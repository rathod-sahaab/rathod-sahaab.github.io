<script lang="ts">
	import Milestone from './timeline/milestone.svelte'
	import { MILESTONES } from '$lib/constants/milestones'
</script>

<section class="py-12 bg-base-100 flex justify-center">
	<div class="max-w-screen-md w-full">
		<div class="text-center">
			<h3 class="text-3xl">Timeline.</h3>
			<span class="text-xl opacity-80 tooltip hover:underline"> /ˈtaɪmlaɪn/ </span>
		</div>
		<ul class="p-4 [&>*:not(:last-child)]:pb-8">
			{#each MILESTONES as milestone}
				<Milestone {milestone} />
			{/each}
		</ul>
		<div />
	</div>
</section>
