<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import '../app.css';

	let showProfileDropdown = false;
	let showMobileMenu = false;
</script>

<div class="app">
	<header>
		<nav class="bg-gray-800">
			<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div class="relative flex h-16 items-center justify-between">
					<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<!-- Mobile menu button-->
						<button
							type="button"
							class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<!--
              Icon when menu is closed.
  
              Heroicon name: outline/bars-3
  
              Menu open: "hidden", Menu closed: "block"
            -->
							<svg
								class="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							<!--
              Icon when menu is open.
  
              Heroicon name: outline/x-mark
  
              Menu open: "block", Menu closed: "hidden"
            -->
							<svg
								class="hidden h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div class="flex flex-shrink-0 items-center">
							<img
								class="block h-8 w-auto lg:hidden"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
								alt="Your Company"
							/>
							<img
								class="hidden h-8 w-auto lg:block"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
								alt="Your Company"
							/>
						</div>
						<div class="hidden sm:ml-6 sm:block">
							<div class="flex space-x-4">
								<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
								<a
									href="/search"
									class:bg-gray-900={$page.url.pathname.includes('/search')}
									class:text-white={$page.url.pathname.includes('/search')}
									class:text-gray-300={!$page.url.pathname.includes('/search')}
									class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									aria-current="page">Search</a
								>

								<a
									href="/new-recipe"
									class:bg-gray-900={$page.url.pathname.includes('/new-recipe')}
									class:text-white={$page.url.pathname.includes('/new-recipe')}
									class:text-gray-300={!$page.url.pathname.includes('/new-recipe')}
									class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>New Recipe</a
								>
							</div>
						</div>
					</div>
					<div
						class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
					>
						{#if $page.data.session}
							{#if $page.data.session.user}
								<!-- Profile dropdown -->
								<div class="relative ml-3">
									<div>
										<button
											type="button"
											class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
											id="user-menu-button"
											aria-expanded="false"
											aria-haspopup="true"
											on:click={() => {
												showProfileDropdown = !showProfileDropdown;
											}}
										>
											<span class="sr-only">Open user menu</span>
											<img
												class="h-8 w-8 rounded-full"
												src={$page.data.session.user.image}
												alt=""
											/>
										</button>
									</div>
									{#if showProfileDropdown}
										<div
											class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="user-menu-button"
											tabindex="-1"
										>
											<a
												href="/favorites"
												class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
												tabindex="-1"
												id="user-menu-item-0">Your Favorites</a
											>
											<a
												href="/auth/signout"
												class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
												tabindex="-1"
												id="user-menu-item-2">Sign out</a
											>
										</div>
									{/if}
								</div>
							{/if}
						{:else}
							<a
								href="/auth/signin"
								class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
								>Sign in</a
							>
						{/if}
					</div>
				</div>
			</div>

			<!-- Mobile menu, show/hide based on menu state. -->
			<div class="sm:hidden" id="mobile-menu">
				<div class="space-y-1 px-2 pt-2 pb-3">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<a
						href="/search"
						class:bg-gray-900={$page.url.pathname.includes('/search')}
						class:text-white={$page.url.pathname.includes('/search')}
						class:text-gray-300={!$page.url.pathname.includes('/search')}
						class="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						aria-current="page">Search</a
					>

					<a
						href="/new-recipe"
						class:bg-gray-900={$page.url.pathname.includes('/new-recipe')}
						class:text-white={$page.url.pathname.includes('/new-recipe')}
						class:text-gray-300={!$page.url.pathname.includes('/new-recipe')}
						class="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>New Recipes</a
					>
				</div>
			</div>
		</nav>
	</header>

	<main>
		<slot />
	</main>
</div>
