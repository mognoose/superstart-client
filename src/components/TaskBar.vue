<template>
    <div class="taskbar">
        <div class="startbutton" @click="start()">
            <img :src="'icons/superstart.png'" alt="start" />
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

<style lang="scss">
.taskbar {
    box-sizing: border-box;
    padding: 10px;
    height: 64px;
    overflow: hidden;

    .startbutton {
        cursor: default;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        width: 80px;

        img {
            height: 25px;
            margin: 10px 0 10px 5px;
            background: #000;
            border-radius: 50%;
            border: 2px solid #000;
            
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
        }
}
</style>