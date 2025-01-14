<template>
	<div>
		<section
			class="h-full bg-no-repeat bg-cover bg-center bg-[url('/background/gradient.png')] clip-custom-polygon clipped">
			<nav class="flex items-center justify-between py-4 px-6 shadow fixed w-full backdrop-blur-lg z-50">
				<a href="" class=" text-xl font-bold">Invoices</a>
				<div class="flex items-center justify-center gap-6 font-semibold">
					<a href="">Docs</a>
					<a href="">Blog</a>
					<a href="">Changelog</a>
				</div>
				<a href=""
					class="bg-[#7c5dfa] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#6c4dea] transition-colors inline-block w-max">Sign
					In</a>
			</nav>
			<div class="min-h-[90vh] container mx-auto px-16 flex items-center justify-center">
				<div class="mt-28">
					<div class="col-span-2 flex flex-col gap-4 justify-center items-center text-center">
						<h1 class="text-3xl md:text-6xl font-bold text-[#1e2139] mb-6">
							Streamline Your
							<FlipWords :words="['Account', 'Invoice', 'Versatile']" :duration="3000" class="!text-primary" /> Process
						</h1>
						<p class="text-lg mb-8 font-semibold tracking-wider">
							Engaging invoices designed to leave a lasting impression on your customers. Effortlessly create infinite
							content with repurpose AI magic, tailored to your needs.
						</p>
						<NuxtLink to="#"
							class="bg-[#7c5dfa] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#6c4dea] transition-colors inline-block w-max">
							Get Started
						</NuxtLink>
					</div>
				</div>
			</div>
		</section>
		<div>
			<div class="flex flex-col overflow-hidden">
				<ContainerScroll>
					<template #title>
						<h1 class="text-4xl font-semibold text-black dark:text-white mb-6">
							Create professional invoices <br />
							<span class="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
								Effortlessly
							</span>
						</h1>
					</template>
					<template #card>
						<NuxtImg src="/background/InvoiceMotion.png" class="mx-auto h-full rounded-2xl object-cover object-left-top"
							alt="hero" height="1024" width="1366">
						</NuxtImg>
					</template>
				</ContainerScroll>
			</div>
			<section class="py-16 px-4 relative overflow-hidden">
				<div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 -z-10" aria-hidden="true" />
				<div class="max-w-6xl mx-auto">
					<div class="text-center mb-16">
						<span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-purple-100 text-purple-600">
							Simple process
						</span>
						<h2 class="text-4xl font-bold text-gray-900">How it works</h2>
					</div>
					<TransitionGroup tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div v-for="(step, index) in steps" :key="step.number" :data-index="index" class="relative">
							<div
								class="h-full bg-white rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
								<div class="p-8">
									<div
										class="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-semibold mb-6">
										{{ step.number }}
									</div>
									<h3 class="text-xl font-semibold mb-4 text-gray-900">
										{{ step.title }}
									</h3>
									<p class="text-gray-600">
										{{ step.description }}
									</p>
								</div>
							</div>
						</div>
					</TransitionGroup>
				</div>
			</section>
			<div>
				<div
					class="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
					<h2 class="text-4xl font-bold text-center text-[#1e2139] mb-12">One central hub for your
						invoice</h2>
					<!-- First Marquee -->
					<Marquee pause-on-hover class="[--duration:20s]">
						<ReviewCard v-for="review in firstRow" :key="review.username" :img="review.img" :name="review.name"
							:username="review.username" :body="review.body" />
					</Marquee>

					<!-- Second Marquee (reverse) -->
					<Marquee reverse pause-on-hover class="[--duration:20s]">
						<ReviewCard v-for="review in secondRow" :key="review.username" :img="review.img" :name="review.name"
							:username="review.username" :body="review.body" />
					</Marquee>

					<!-- Left Gradient -->
					<div
						class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background">
					</div>

					<!-- Right Gradient -->
					<div
						class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background">
					</div>
				</div>
			</div>

			<section class="py-16 bg-[url('/background/gradient.png')] footer-clipped">
				<div class="container mx-auto px-4 text-center">
					<h2 class="text-3xl font-bold mb-6">Ready to Simplify Your Invoicing?</h2>
					<p class="text-lg mb-8 font-semibold tracking-wider">Join thousands of satisfied users and start creating
						professional invoices
						today.
					</p>
					<NuxtLink to="#"
						class="bg-white text-[#7c5dfa] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
						Sign Up Now
					</NuxtLink>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
const reviews = [
	{
		name: "Jack",
		username: "@jack",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "Jill",
		username: "@jill",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "John",
		username: "@john",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "Jane",
		username: "@jane",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "Jenny",
		username: "@jenny",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/jenny",
	},
	{
		name: "James",
		username: "@james",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "https://avatar.vercel.sh/james",
	},
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));

const steps = ref([
	{
		number: 1,
		title: "Create & validate",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius."
	},
	{
		number: 2,
		title: "Send to PDF",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius."
	},
	{
		number: 3,
		title: "Track profit",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius."
	}
])

const services = [
	{
		icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
		title: 'Custom Templates',
		description: 'Create and save custom invoice templates tailored to your brand.',
	},
	{
		icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
		title: 'Easy Tracking',
		description: 'Keep track of paid and unpaid invoices with our intuitive dashboard.',
	},
	{
		icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
		title: 'Secure Payments',
		description: 'Integrate with popular payment gateways for secure transactions.',
	},
];
</script>
<style>
.clipped {
	clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%);
}

.footer-clipped {
	clip-path: polygon(0 3%, 100% 0, 100% 100%, 0% 100%);
}
</style>
