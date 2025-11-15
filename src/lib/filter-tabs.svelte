<script lang="ts" generics="T extends string">
	import { type IFilterTag } from './types/filter-tags'

	export let activeTag: T
	export let setTag: (tag: T) => void

	export let tags: IFilterTag<T>[] | readonly IFilterTag<T>[]
</script>

<div class="p-4 max-w-screen-md">
	{#each tags as tag}
		<button
			class="btn btn-sm rounded-sm m-1 normal-case"
			class:active={tag.tag === activeTag}
			on:click={() => setTag(tag.tag)}
			>{tag.name}
			{#if tag.count}
				<span class="font-normal max-w-0 transition-all overflow-hidden">| {tag.count}</span>
			{/if}
		</button>
	{/each}
</div>

<style>
	button.active {
		border: 2px solid hsl(var(--bc));
	}

	button.active span,
	button:hover span {
		max-width: unset;
	}
</style>
