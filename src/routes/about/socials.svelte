<script>
	import GithubLooper from '~icons/line-md/github-loop'
	import Linkedin from '~icons/mdi/linkedin'
	import Twitter from '~icons/pajamas/twitter'
	import IconLink from './socials/icon-link.svelte'
</script>

<section class="py-12 bg-base-100 flex justify-center">
	<div class="max-w-screen-md w-full">
		<div class="text-center">
			<h3 class="text-3xl">Socials.</h3>
			<span class="text-xl opacity-80 tooltip hover:underline"> /sō′shəls/ </span>
		</div>
		<ul
			class="p-4 flex flex-row justify-center items-center [&>*:not(:last-child)]:mr-2 [&>*]:inline-block"
		>
			<li>
				<IconLink href="https://github.com/rathod-sahaab" text="rathod-sahaab">
					<GithubLooper />
				</IconLink>
			</li>
			<li>
				<IconLink href="https://linkedin.com/in/rathod-sahaab" text="rathod-sahaab">
					<Linkedin />
				</IconLink>
			</li>
			<li>
				<IconLink href="https://twitter.com/swayambhu_dev" text="swayambhu_dev">
					<Twitter />
				</IconLink>
			</li>
		</ul>
		<div />
	</div>
</section>
