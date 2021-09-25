<template>
    <div id="app">
        <h1>Leonardo e Lais</h1>
        <Home/>
    </div>
</template>

<script>
import Home from "./pages/Home"

export default {
    components: { Home }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
    font-family: "RobotoMono", "monospace", "sans-serif";
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: rgb(11,143,51);
    background: linear-gradient(313deg, rgba(11,143,51,1) 0%, rgba(255,255,255,1) 44%);
}
</style>