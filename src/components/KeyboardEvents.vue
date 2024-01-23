<template>
    <div></div>
</template>
    
<script>
export default {
    created() {
        const component = this;
        this.handler = function(e) {
            if (e.keyCode == 75 && e.ctrlKey) e.preventDefault();
            component.$emit('keydown', e);
        }
        window?.addEventListener('keydown', this.handler);
    },
    beforeDestroy() {
        window?.removeEventListener('keydown', this.handler);
    }
}
</script>
    
<style lang="scss" scoped>
div {
    display: none;
}
</style>