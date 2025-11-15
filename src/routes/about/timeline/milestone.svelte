<script lang="ts">
	import type { TMilestone } from '$lib/constants/milestones'

	export let milestone: TMilestone
	const active: boolean = milestone.date.end === null

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
	}

	function calculateDuration(start: Date, end: Date | null): string {
		const endDate = end || new Date()
		const diffTime = Math.abs(endDate.getTime() - start.getTime())
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
		const months = Math.ceil(diffDays / 30)
		const years = Math.floor(months / 12)

		if (years > 0) {
			const remainingMonths = months % 12
			return remainingMonths > 0 ? `${years} years ${remainingMonths} months` : `${years}y`
		}
		return `${months} months`
	}
</script>

<div class="milestone pl-4 border-l-base-content border-dotted border-l-[3px]" class:active>
	<div
		class="title before:bg-base-100 after:bg-base-content before:border-2 before:border-base-content"
		class:active
	>
		<div>
			<h5 class="text-lg font-bold inline">{milestone.title}</h5>
			<span class="ml-2 italic"> {milestone.role} </span>
		</div>

		<span class="italic">
			{formatDate(milestone.date.start)} - {milestone.date.end
				? formatDate(milestone.date.end)
				: 'Present'}
		</span>
		<span class="ml-4 italic text-sm text-base-content/50">
			({calculateDuration(milestone.date.start, milestone.date.end)})
		</span>
	</div>
	<p class="pt-4 pl-4">
		{@html milestone.description}
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
