<script lang="ts">
    import { faBars } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    let open = false;
    let toggle = () => open = !open;

    const links = [
        { name: "Trips", href: "/trips" },
        { name: "About Us", href: "/about" },
        { name: "Membership", href: "/membership" },
        { name: "Partners", href: "/partners" },
        { name: "Events", href: "/events" },
        { name: "Contact", href: "/contact" },
    ];
</script>

<nav>
    <div class="flex items-center justify-between xl:w-5xl h-24 p-2 mx-auto">
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
                    <a href={link.href} class="text font-semibold p-6 rounded-md hover:bg-gray-50">{link.name}</a>
                {/each}
            </div>
        </div>
    </div>
    <div class="{open ? "xl:absolute hidden" : "hidden"} mt-4 w-full">
        {#each links as link}
            <a
                href={link.href}
                class="bg-white p-4 w-full 
                border-t-2 border-gray-100"
            >
                {link.name}
            </a>
        {/each}
    </div>
</nav>
