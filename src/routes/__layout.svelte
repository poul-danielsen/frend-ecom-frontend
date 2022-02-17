<script>
    import Background from "../components/spring22/Background.svelte";
    import Navbar from "../components/nav/Navbar.svelte"
</script>

<svelte:head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Elsie:wght@900&family=Rubik:wght@300;500&display=swap');
        @import url("/styling/app.css");
    </style>
</svelte:head>

<Background />

<div class="content-wrapper">
    <slot />
</div>


<style>
    .content-wrapper {
        margin: auto;
        width: 90vw;
        max-width: 1200px;
    }
</style>