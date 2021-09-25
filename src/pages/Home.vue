<template>
    <div class="home">
        <p class="date"> 22 jul 22 </p>
        <Counter class="counter" deadline="July 22, 2022"/>
    </div>
</template>

<script>
import Counter from "../components/Counter"

export default {
    components: { Counter}
}
</script>

<style>

.home {
  height: 100vh;
  width: 100vw;
  display: grid; 
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);
  gap: 0px 0px; 
  grid-template-areas: 
    "a1 a2 a3 a4"
    "b1 b2 b3 b4"
    "c1 c2 c3 c4"
    "d1 d2 d3 d4"; 
}

.date {
    font-size: 5em;
    text-align: center;
    grid-area: b2;
    font-weight: bold;
    color: rgb(1, 49, 1);
    padding: 0;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
}


.counter {
    overflow: auto;
    grid-area: d2;
}
</style>