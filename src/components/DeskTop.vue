<template>
    <div class="desktop">
        <div class="icon" v-for="(game, index) in games" :key="index" @click="openGame()">
            <!-- <div><img :src="game.icon ? game.icon : ~/assets/icons/default.png" :alt="game.name" /></div> -->
            <div><img :src="game.icon ? game.icon : 'icons/default.png'" :alt="game.name" /></div>
            <div>{{ game.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['games'],
}
</script>

<style>
.desktop {
    background-color: teal;
    height: 100vh;
    height: calc(100dvh - 64px);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;

    .icon {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 1fr;
        width: 100px;
        height: 100px;
        box-sizing: border-box;
        overflow: hidden;
        margin: 1rem;
        
        :nth-child(1) {
            justify-self: center;
            height: 64px;
            width: 64px;
            box-sizing: border-box;
            border-radius: 10px;
        }
        :nth-child(2) {
            text-align: center;
            color: #fff;
            height: 32px
        }
    }
}

</style>