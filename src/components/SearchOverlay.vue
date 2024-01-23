<template>
    <div class="overlay">
        <input type="text" ref="overlaysearch" v-model="search">
        <div class="search-results">
            <div class="menu-item" v-for="game in games.filter(game => game.name.toUpperCase().includes(search.toUpperCase()))" :key="game.name" @click="$emit('openGame', game.name)">
                <img :src="game.icon ? game.icon : 'icons/default.png'" :alt="game.name" />
                <span>{{ game.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['games'],
    data() {
        return {
            search: '',
        }
    },
    mounted() {
        this.$refs.overlaysearch.focus();
    },

}
</script>

<style lang="scss">
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    width: 100dvw;
    height: 100vh;
    height: 100dvh;
    background: rgba(0,0,0,0.85);
    backdrop-filter: blur(25px);
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr 1fr 1fr;

    input {
        border: 2px solid gray;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        height: 30px;
        grid-column-start: 2;
        grid-row-start: 1;
        align-self: end;
        margin-bottom: 2rem;
    }

    .search-results {
        grid-column-start: 2;
        grid-row-start: 2;
        align-self: top;


        .menu-item {
            margin: .5rem;
            display: grid;
            grid-template-columns: 32px auto;
            color: #fff;

            img {
                width: 32px;
                height: 32px;
            }
            span {
                justify-self: start;
                align-self: center;
            }
        }
    }
}
</style>