<script lang="ts">
    import Navbar from './lib/Navbar.svelte';
</script>

<main class="flex flex-col h-screen">
    <Navbar />
    <div class="grow h-auto bg-amber-200">
        <div class="flex flex-col justify-center items-center h-full w-full">
            <h1 class="text-7xl font-bold mb-2">Welcome to ITU Padel</h1>
            <h5 class="text-6xl font-medium">Some very cool motto</h5>
        </div>
    </div>
</main>

<style lang="postcss">
    @reference "tailwindcss";

    :global(body) {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
</style>
