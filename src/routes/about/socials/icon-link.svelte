<script lang="ts">
	export let href: string
	export let text: string
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="hover:bg-base-300 group hover:shadow-lg p-4 hover:-skew-x-6 inline-flex transition-all duration-500"
>
	<span class="text-2xl font-bold">
		<slot />
	</span>
	<span
		class="inline-block max-w-0 pl-0 overflow-x-clip whitespace-nowrap group-hover:max-w-[150px] group-hover:pl-2 duration-500 transition-max-width transition-all hover:underline"
		>{text}</span
	>
</a>
