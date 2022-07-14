<template>
<div class="cart">
    <div>
        <span class="cart__title">Carrinho</span>
        <div class="cart__list" v-if="inCartGames.length">
            <div class="cart__container" v-for="(item, index) in inCartGames" :key="index" @click="removeGameFromCart(index)">
                <div>
                    <game-image :game-image="item.image" :game-name="item.name" small />
                </div>
                <div>
                    <div class="cart__container__title">
                        {{item.name}}
                    </div>
                    <div class="cart__container__price">
                        R$ {{formatValue(item.price)}}
                    </div>
                </div>
                <div class="cart__remove">
                    <img src="../assets/icons/delete.svg" width="15">
                </div>
            </div>
        </div>
    </div>
    <div v-if="inCartGames.length">
        <div class="cart__payment-container">
            <div class="cart__payment-information">
                <span class="cart__payment-information__title">subtotal</span>
                <span class="cart__payment-information__price">R$ {{formatValue(priceCalculate.subtotal)}}</span>
            </div>
            <div class="cart__payment-information">
                <span class="cart__payment-information__title">frete</span>
                <span class="cart__payment-information__price">R$ {{formatValue(priceCalculate.shipping)}}</span>
            </div>
            <div class="cart__payment-information">
                <span class="cart__payment-information__title">total</span>
                <span class="cart__payment-information__total-price">R$ {{formatValue(priceCalculate.total)}}</span>
            </div>
        </div>
        <button>finalizar compra</button>
    </div>
    <div class="cart__empty" v-if="inCartGames.length == 0">
        <icon-cart-empty />
        <span>Até o momento, <br> o seu carrinho está vazio</span>
    </div>
</div>
</template>

<script>
import GameImage from '@/components/GameImage.vue'
import IconCartEmpty from '@/assets/icons/icon-cart-empty.vue'
import { mapGetters } from 'vuex'

export default {
    name: "Cart",
    components: {
        IconCartEmpty,
        GameImage
    },
    methods: {
        formatValue(value) {
            value = value.toFixed(2);
            return value.replace(".", ",");
        },
        removeGameFromCart(gameIndex){
            this.$store.dispatch('removeGame', gameIndex)
        }
    },
    computed: {
        ...mapGetters(['inCartGames']),

        priceCalculate: function () {
            let obj = {
                subtotal: 0,
                shipping: 0,
                price: 0
            };

            this.inCartGames.forEach(item => {
                obj.subtotal += item.price
            })

            obj.shipping = 10 * this.inCartGames.length;
            if (obj.subtotal > 250) {
                obj.shipping = 0;
            }

            obj.total = obj.subtotal + obj.shipping;

            return obj;
        },
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/variables.scss";

.cart {
    grid-area: Cart;
    padding: 20px;
    border: 1px solid $gray;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
        font-size: 18px;
        font-weight: $bold;
    }

    &__list {
        margin-top: 22px;
    }

    &__container {
        display: flex;
        gap: 10px;
        margin-bottom: 19px;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;

        &:last-child {
            margin-bottom: 0;
        }

        &__title {
            font-size: 14px;
            line-height: 19px;
            color: $boulder;
        }

        &__price {
            font-size: 14px;
            line-height: 19px;
            font-weight: bold;
            color: $black-cat;
        }

        &:hover {
            .cart__remove {
                opacity: 100;
            }
        }
    }

    &__remove {
        opacity: 0;
    }

    &__payment-container {
        margin: 25px 0;
    }

    &__payment-information {
        display: flex;
        justify-content: space-between;

        &__title {
            font-size: 14px;
            line-height: 19px;
            color: $boulder;
        }

        &__price {
            font-size: 16px;
            line-height: 22px;
            font-weight: bold;
            color: $black-cat;
        }

        &__total-price {
            font-size: 20px;
            line-height: 27px;
            font-weight: bold;
            color: $black-cat;
        }

        &:not(:first-child):not(:last-child) {
            margin: 18px 0;
        }
    }

    button {
        background: $picton-blue;
        color: #fff;
        border: none;
        border-radius: 3px;
        padding: 15px 40px;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        width: 100%;
    }

    &__empty {
        display: flex;
        gap: 18px;
        margin: 55px 0 80px;
        flex-direction: column;
        place-items: center;
        text-align: center;
        color: $smokey-grey;
        font-size: 14px;
        line-height: 19px;
    }
}
</style>
