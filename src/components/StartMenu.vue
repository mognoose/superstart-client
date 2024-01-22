<template>
    <div class="start-menu">
        <input type="text">
    </div>
</template>

<script>
export default {
    props: ['games'],
}
</script>

<style>
.start-menu {
    position: absolute;
    bottom: 64px;
    left: 0;
    background-color: gray;
    height: 60vh;
    height: 60dvh;
    width: 400px;

    input {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
}
</style>