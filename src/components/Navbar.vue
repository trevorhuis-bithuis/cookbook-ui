  
<script setup>
const navigation = [
    { name: 'Search', route: '/search' },
    { name: 'New Recipe', route: '/new-recipe' },
]
</script>

<template>
    <header class="bg-indigo-600">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                <div class="flex items-center">
                    <router-link to="/">
                        <span class="sr-only">Your Company</span>
                        <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                    </router-link>
                    <div class="ml-10 hidden space-x-8 lg:block">
                        <router-link v-for="link in navigation" :key="link.name" :to="link.route"
                            class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</router-link>
                    </div>
                </div>
                <div class="ml-10 space-x-4">
                    <router-link to="/login" class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base
                        font-medium text-white hover:bg-opacity-75">
                        Sign in
                    </router-link>
                    <router-link to="/register" class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base
                        font-medium text-indigo-600 hover:bg-indigo-50">
                        Sign up
                    </router-link>
                </div>
            </div>
            <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                <router-link v-for="link in navigation" :key="link.name" :to="link.route"
                    class="text-base font-medium text-white hover:text-indigo-50">{{ link.name }}</router-link>
            </div>
        </nav>
    </header>
</template>


<script>
export default {
    name: 'Header'
};

</script>