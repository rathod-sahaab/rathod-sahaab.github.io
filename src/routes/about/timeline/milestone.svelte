<script lang="ts">
	import type { TMilestone } from '$lib/constants/milestones'

	export let milestone: TMilestone
</script>

<div class="mt-4">
	<h5 class="text-lg font-bold">{milestone.title}</h5>
	<p>
		{#if milestone.date.start}
			{milestone.date.start} - {milestone.date.end}
		{:else}
			{milestone.date}
		{/if}
	</p>
	<p><slot /></p>
</div>
