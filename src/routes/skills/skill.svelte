<script lang="ts">
	import type { ISkill } from '$lib/constants/skills'
	import CheckCircle from '~icons/lucide/check-circle'
	import Certificate from '~icons/mingcute/certificate-2-line'

	export let skill: ISkill
</script>

<div class="mb-4 bg-base-200 p-4">
	<h3 class="mb-2 text-xl font-bold">{skill.name}</h3>
	<p class="mb-4">{skill.description}</p>
	<ul class="mb-4">
		{#each skill.aspects as aspect}
			<li class="mb-2 pl-10 relative">
				<CheckCircle class="inline absolute left-2 top-1" />
				<span class="tooltip text-left" data-tip={aspect.description}>
					{aspect.name}
				</span>
			</li>
		{/each}
	</ul>
	{#if 'certifications' in skill}
		<p class="mb-2 italic">Certifications:</p>
		<ul>
			{#each skill.certifications !== undefined ? skill.certifications : [] as cert}
				<li class="mb-2 pl-10 relative">
					<Certificate class="inline absolute left-2 top-1" />
					{cert.issuer}:

					<a class="link-accent" href={cert.link}>
						{cert.certification}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
