<template>
    <div class="alerts">
        <div class="alert" v-for="(error, index) in errors" :key="index">
            <div class="alert-text">{{ error }}</div>
            <button class="alert-close delete-button heavy-button" @click="removeError(index)">X</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        errors: Array,
    },
    emits: [
        'removeError',
    ],
    methods: {
        removeError(index) {
            this.$emit('removeError', index);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../sass/vars';

.alerts {
    position: absolute;
    margin-left: 10%;
    width: 80%;

    .alert {
        background-color: $color-error-background;
        border: 1px solid $color-error;
        color: $color-error;
        display: grid;
        grid-template-columns: auto min-content;
        padding: 0.5em;
        margin: 0.5em;

        &-close {
            max-height: 1.6em;
        }
    }
}
</style>