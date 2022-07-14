<template>
  <div class="game-image" :class="{'game-image__small': small}">
    <img
      :class="{'small': small}"
      :src="require(`../assets/images/${gameImage}`)"
      :alt="`${gameName} game image`"
    >
  </div>
</template>

<script>
export default {
  name: 'GameImage',
  props: {
    gameImage: {
      type: String,
      required: true
    },
    gameName: {
      type: String,
      required: true
    },
    small: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.game-image{
  width: 262px;
  height: 230px;
  background-color: $soft-peach;
  border-radius: 3px;
  position: relative;

  &__small{
    width: 60px;
    height: 53px;
  }

img{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &.small{
    width: 40px;
    height: 40px;
  }
}
}
</style>
