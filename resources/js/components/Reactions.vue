<template>
    <div class="post-reactions">
        <form @submit.prevent="toggleReaction('smile')">
            <input
                class="smile-checkbox"
                type="checkbox"
                name="smile"
                :checked="smileChecked">

            <input
                class="smile-submit"
                type="submit"
                value=":)">
        </form>

        <form @submit.prevent="toggleReaction('frown')">
            <input
                class="frown-checkbox"
                type="checkbox"
                name="frown"
                :checked="frownChecked">

            <input
                class="frown-submit"
                type="submit"
                value=":(">
        </form>

        <form @submit.prevent="toggleReaction('heart')">
            <input
                class="heart-checkbox"
                type="checkbox"
                name="heart"
                :checked="heartChecked">

            <input
                class="heart-submit"
                type="submit"
                value="<3">
        </form>

        <form @submit.prevent="toggleReaction('laugh')">
            <input
                class="laugh-checkbox"
                type="checkbox"
                name="laugh"
                :checked="laughChecked">

            <input
                class="laugh-submit"
                type="submit"
                value="xD">
        </form>

        <div class="count count-smile">
            {{ smileCount }}
        </div>

        <div class="count count-frown">
            {{ frownCount }}
        </div>

        <div class="count count-heart">
            {{ heartCount }}
        </div>

        <div class="count count-laugh">
            {{ laughCount }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        reactions: Array,
    },
    inject: [
        'authenticated_user_id'
    ],
    emits: [
        'reactionCreated',
        'reactionDeleted'
    ],
    computed: {
        smileCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'smile').length;
        },
        frownCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'frown').length;
        },
        heartCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'heart').length;
        },
        laughCount: function() {
            return this.reactions.filter(reaction => reaction.type === 'laugh').length;
        },
        smileChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'smile' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        },
        frownChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'frown' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        },
        heartChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'heart' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        },
        laughChecked: function() {
            return this.reactions.filter(reaction => reaction.type === 'laugh' && reaction.user_id === this.authenticated_user_id.value).length > 0;
        },
    },
    methods: {
        toggleReaction(type) {
            if ((type === 'smile' && this.smileChecked) ||
                (type === 'frown' && this.frownChecked) ||
                (type === 'heart' && this.heartChecked) ||
                (type === 'laugh' && this.laughChecked)) {
                // If checkbox is checked, we need to delete the reaction.
                this.deleteReaction(type);
            } else {
                // If checkbox is not checked, we need to create the reaction.
                this.submitReaction(type);
            }
        },
        submitReaction(type) {
            // Send request to controller.
            axios.post('/api/reactions', {
                id: this.id,
                type: type,
            }).then(response => {
                if (response.status != 201) {
                    // Request failed.
                    // FIXME handle errors.
                } else {
                    // Request succeeded.
                    // Trigger event to add reaction without waiting for broadcast.
                    this.$emit('reactionCreated', response.data);
                }
            });
        },
        deleteReaction(type) {
            // Send request to controller.
            axios.delete('/api/reactions', {
                data: {
                    id: this.id,
                    type: type,
                }, // Not that axios.delete() requests are formatted differently than .get() and .post().
            }).then(response => {
                if (response.status != 200) {
                    // Request failed.
                    // FIXME handle errors.
                } else {
                    // Request succeeded.
                    // Trigger event to add reaction without waiting for broadcast.
                    this.$emit('reactionDeleted', response.data);
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../sass/vars';

.post-reactions {
    color: $color-reaction-inactive;
    column-gap: 5px;
    display: grid;
    grid-template-columns: 2em 2em 2em 2em;
    margin-top: 1em;
    
    .count {
        justify-self: center;
        user-select: none;

        &-smile {
            color: $color-text-accent;
        }
        
        &-frown {
            color: $color-text-accent;
        }
        
        &-heart {
            color: $color-text-accent;
        }
        
        &-laugh {
            color: $color-text-accent;
        }
    }

    form {
        input[type="checkbox"] {
            display: none;
        }

        input[type="submit"] {
            border: 1px solid $color-text-accent;
            font-weight: bold;
            padding-bottom: 0.2em;
            width: 100%;
        }
        
        .smile {
            &-submit {
                &:hover, &:active {
                    background-color: $color-reaction-smile-light;
                    color: $color-reaction-smile;
                }
            }

            &-checkbox:checked ~ .smile-submit {
                background-color: $color-reaction-smile-light;
                color: $color-reaction-smile;
                &:hover, &:active {
                    background-color: inherit;
                    color: $color-reaction-inactive;
                }
            }
        }
        
        .frown {
            &-submit {
                &:hover, &:active {
                    background-color: $color-reaction-frown-light;
                    color: $color-reaction-frown;
                }
            }

            &-checkbox:checked ~ .frown-submit {
                background-color: $color-reaction-frown-light;
                color: $color-reaction-frown;
                &:hover, &:active {
                    background-color: inherit;
                    color: $color-reaction-inactive;
                }
            }
        }
        
        .heart {                
            &-submit {
                &:hover, &:active {
                    background-color: $color-reaction-heart-light;
                    color: $color-reaction-heart;
                }
            }

            &-checkbox:checked ~ .heart-submit {
                background-color: $color-reaction-heart-light;
                color: $color-reaction-heart;
                &:hover, &:active {
                    background-color: inherit;
                    color: $color-reaction-inactive;
                }
            }
        }
        
        .laugh {                
            &-submit {
                &:hover, &:active {
                    background-color: $color-reaction-laugh-light;
                    color: $color-reaction-laugh;
                }
            }

            &-checkbox:checked ~ .laugh-submit {
                background-color: $color-reaction-laugh-light;
                color: $color-reaction-laugh;
                &:hover, &:active {
                    background-color: inherit;
                    color: $color-reaction-inactive;
                }
            }
        }
    }
}
</style>