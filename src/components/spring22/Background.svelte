<script>
    import {backgroundPrimary, backgroundSecondary} from "./styleVariables";
</script>

<div style="
    --background-primary:{backgroundPrimary};
    --background-secondary:{backgroundSecondary};
" />

<style>
    div {
        width: 100vw;
        height: 100vh;
        background: radial-gradient(circle 100vh at 0% 100%, var(--background-secondary), var(--background-primary) 90%);
        z-index: -1;
        position: fixed;
        top: 0; 
        left: 0;
    }
</style>