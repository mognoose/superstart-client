<template>
    <div class="overlay">
        <input
            type="text"
            ref="overlaysearch"
            v-model="search"
            @keyup.enter="execute"
            @keyup.down="select('down')"
            @keyup.up="select('up')"
        >
        <div class="search-results">
            <div
                class="menu-item"
                v-for="game, i in filteredGames"
                :key="game.name"
                @click="$emit('openGame', game.name)"
                :class="{ 'selected': i === selected }"
            >
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
            selected: 0,
        }
    },
    computed: {
        filteredGames() {
            return this.games.filter(game => game.name.toUpperCase().includes(this.search.toUpperCase()));
        },
    },
    mounted() {
        this.$refs.overlaysearch.focus();
    },
    methods: {
        execute(e) {
            this.$emit('openGame', this.filteredGames[this.selected].name);
        },
        select(direction) {
            if(direction === 'up' && this.selected > 0) {
                this.selected--;
            }
            if(direction === 'down'){
                if (this.filteredGames.length - 1 > this.selected) {
                    this.selected++
                }
            }
        }
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
            grid-template-columns: 96px auto;
            color: #fff;
            padding: .5rem;

            img {
                width: 64px;
                height: 64px;
            }
            span {
                justify-self: start;
                align-self: center;
            }
        }

        .selected {
            background-color: rgba(255,255,255,0.25);
            border-radius: 8px;
        }
    }
}
</style>