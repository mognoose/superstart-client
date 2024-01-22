<template>
    <div class="taskbar">
        <div class="startbutton" @click="start()">
            <img :src="'icons/start.png'" alt="start" />
            <div>Start</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['games'],
    methods: {
        start() {
            this.$emit('start')
        }
    }
}
</script>

<style>
.taskbar {
    box-sizing: border-box;
    padding: 10px;
    height: 64px;
    overflow: hidden;
    background-color: lightgray;

    .startbutton {
        cursor: default;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        width: 80px;

        img {
            height: 20px;
            margin: 10px 0 10px 5px;
            
        }

        div {
            display: grid;
            align-content: center;
            align-self: center;
            height: 20px;
            padding: 10px;

        }
        border: 1px solid gray;
    }
    
    .startbutton:hover {
            background-color: silver;
        }
}
</style>