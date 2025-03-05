<script lang="ts">
    import { faBars } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    let open = false;
    let toggle = () => {
        open = !open;
    };

    const links = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/about" },
        { name: "CONTACT", href: "/contact" },
    ];
</script>

<nav>
    <div class="flex items-center justify-between xl:w-7xl p-6 mx-auto">
        <a href="/" class="text-2xl font-bold text-nowrap overflow-hidden">
            ITU PADEL
        </a>
        <div class="xl:hidden flex items-center">
            <button on:click={toggle} class="bg-gray-100 p-2 rounded-full">
                <Fa icon={faBars} class="text-2xl aspect-square" />
            </button>
        </div>
        <div class="xl:flex hidden">
            <div>
                {#each links as link}
                    <a href={link.href} class="text font-semibold px-4 py-2">{link.name}</a>
                {/each}
            </div>
        </div>
    </div>
    <div class="{open ? "absolute" : "hidden"} mt-4">
        {#each links as link}
            <a href={link.href} class="text w-full bg-white p-4 border-t-2 border-gray-100">
                {link.name}
            </a>
        {/each}
        <div class="grow bg-black opacity-20"></div>
    </div>
</nav>
