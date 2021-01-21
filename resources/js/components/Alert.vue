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
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 480px;
    width: 100%;

    .alert {
        background-color: $color-error-background;
        border: 1px solid $color-error;
        color: $color-error;
        column-gap: 10px;
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