<script lang="ts">
	/** @type {any} */
	export let data: any;

	/** @type {string} */
	export let alt: string;

	let sources: any;

	$: {
		sources = {};

		data.forEach((img: any) => {
			if (!sources[img.format]) {
				sources[img.format] = {
					type: `image/${img.format}`,
					srcset: []
				};
			}

			sources[img.format].srcset.push(`${img.src} ${img.width}w`);
		});
	}

	$: fallback = data
		.filter((img: any) => img.format === 'png' || img.format === 'jpg')
		.sort((a: any, b: any) => a.width - b.width)
		.pop();
</script>

<picture>
	{#each Object.values(sources:any) as source}
		<source type={source.type} srcset={source.srcset.join(', ')} />
	{/each}
	<img src={fallback.src} {alt} width={fallback.width} height={fallback.height} />
</picture>

<style>
	img {
		display: block;
		width: 100%;
		height: auto;
		max-height: var(--max-height, 100%);
		object-fit: cover;
	}
</style>
