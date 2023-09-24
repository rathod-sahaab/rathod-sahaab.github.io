<script lang="ts">
	import type { TMilestone } from '$lib/constants/milestones'

	export let milestone: TMilestone
	const active: boolean =
		typeof milestone.date !== 'string' ? milestone.date.end.toLowerCase() === 'present' : false
</script>

<div class="milestone pl-4 border-l-base-content border-dotted border-l-[3px]" class:active>
	<div
		class="title before:bg-base-100 after:bg-base-content before:border-2 before:border-base-content"
		class:active
	>
		<h5 class="text-lg font-bold">{milestone.title}</h5>
		<span class="italic">
			{#if typeof milestone.date !== 'string'}
				{milestone.date.start} - {milestone.date.end}
			{:else}
				{milestone.date}
			{/if}
		</span>
	</div>
	<p class="pt-2">
		{milestone.description}
	</p>
	<p><slot /></p>
</div>

<style>
	.milestone.active {
		border-style: solid;
	}

	.title.active::after {
		opacity: 1;
	}

	.title {
		position: relative;
	}

	.title::after,
	.title::before {
		content: '';
		aspect-ratio: 1 / 1;
		display: inline;
		position: absolute;
		border-radius: 1em;

		/* Changes with left border-width */
		left: calc(-1rem + -1.5px);
		top: 0.9rem;
		transform: translate(-50%, -50%);
	}

	.title::after {
		/* opacity: 0; */
		width: 0.4em;
	}

	.title::before {
		width: 0.9em;
	}
</style>
