<script lang="ts">
    import Navbar from "./lib/Navbar.svelte";
</script>

<main class="flex flex-col h-screen">
    <Navbar />
    <div class="grow h-auto bg-amber-200">
        <div class="flex flex-col justify-center items-center h-full w-full">
            <h1 class="xl:text-7xl sm:text-5xl text-3xl font-bold mb-4">
                Welcome to ITU Padel
            </h1>
            <h5 class="xl:text-6xl sm:text-4xl text-2xl font-medium">
                Some very cool motto
            </h5>
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
