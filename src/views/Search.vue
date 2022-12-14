<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div class="mx-auto max-w-3xl">
            <div>
                <label for="text" class="block text-lg font-medium text-gray-700">Search</label>
                <div class="mt-1">
                    <input type="text" name="text" id="text"
                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Find a new recipe..." />
                </div>
            </div>
            <CategoryDropdown />
        </div>
    </div>
</template>

<script setup>
import CategoryDropdown from "../components/CategoryDropdown.vue";
</script>