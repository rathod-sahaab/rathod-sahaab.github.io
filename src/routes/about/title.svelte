<script>
	import Developer from './title/developer.svelte'
</script>

<div class="hero min-h-screen w-screen bg-base-100 relative overflow-hidden">
	<Developer />
	<div class="hero-content">
		<div class="max-w-screen-lg">
			<div>
				<h1 class="text-5xl font-bold sm:inline mr-4">Abhay Raj Singh.</h1>
				<h2 class="sm:inline">
					<a
						class="text-3xl opacity-80 tooltip hover:underline"
						data-tip="International Phonetic Alphabet"
						href="https://en.wikipedia.org/wiki/International_Phonetic_Alphabet"
					>
						/ʌbʰj raːdʒ sɪŋh/
					</a>
				</h2>
			</div>
			<p class="text-2xl pt-6">
				An engineer who loves to build things. Specializing in <b>backend engineering</b>, and
				aiming for proficiency in <em>all-stack</em>, a fancy way to say
				<a class="underline italic" href="https://abhay.rs/blog">everything engineering</a>.
			</p>
		</div>
	</div>
</div>
