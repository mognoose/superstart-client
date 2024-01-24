<template>
    <div class="start-menu">
        <div class="user">
            <img :src="'icons/default.png'" alt="user profile" />
            <span>user</span>
        </div>
        <div class="gamelist">
            <div v-if="search" class="menu-item">
                {{ background }}
            </div>
            <div
                class="menu-item"
                v-for="game in games.filter(game => game.name.toUpperCase().includes(search.toUpperCase()))"
                :key="game.name"
                @click="$emit('openGame', game.name)"
            >
                <img :src="game.icon ? game.icon : 'icons/default.png'" :alt="game.name" />
                <span>{{ game.name }}</span>
            </div>
        </div>
        <div class="options">
            <div
                class="menu-item"
                v-for="option in options"
                :key="option.name"
                @click="setOption(option.name)"
            >
                <img :src="options.icon ? options.icon : 'icons/default.png'" :alt="options.name" />
                <span>{{ option.name }}</span>
            </div>
        </div>
        <input type="text" ref="search" v-model="search">
    </div>
</template>

<script>
import { useCustomisationsStore } from '@/stores/customisations'

export default {
    props: ['games'],
    setup() {
        const store = useCustomisationsStore()
        const { setBackground, removeBackground } = store
        const background = computed(() => store.background)
        return { setBackground, removeBackground, background }
    },
    data() {
        return {
            search: '',
            options: [
                { name: 'option 1', icon: "icons/default.png" },
                { name: 'option 2', icon: "icons/default.png" },
                { name: 'option 3', icon: "icons/default.png" },
                { name: 'option 4', icon: "icons/default.png" },
                { name: 'option 5', icon: "icons/default.png" },
            ]
        }
    },
    mounted() {
        this.focusSearch();
    },
    methods: {
        focusSearch() {
            this.$refs.search.focus();
        },
        setOption(option){
            console.log(option);
            if(option === 'option 1') {
                this.setBackground('blue');
            }
            if(option === 'option 2') {
                this.setBackground('');
            }
        }
    }
}
</script>

<style lang="scss">
.start-menu {
    position: absolute;
    bottom: 64px;
    left: 0;
    height: 60vh;
    height: 60dvh;
    width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 58px auto 2.5rem;

    .user {
        display: grid;
        grid-template-columns: 60px auto;

        img {
            background: darkslategray;
            box-sizing: border-box;
            margin: 5px;
            border: 2px solid white;
            width: 48px;
            height: 48px;
            border-radius: 3px;
        }

        span {
            justify-self: start;
            align-self: center;
            color: #fff;
            font-weight: bold;
        }
    }

    .menu-item {
        margin: .5rem;
        display: grid;
        grid-template-columns: 32px auto;

        img {
            width: 32px;
            height: 32px;
        }
        span {
            justify-self: start;
            align-self: center;
        }
    }

    .gamelist {
        grid-row-start: 2;
        grid-column-start: 1;

    }

    .options {
        grid-row-start: 2;
        grid-column-start: 2;
    }

    input {
        grid-row-start: 3;
        grid-column-start: 1;
    }
}
</style>