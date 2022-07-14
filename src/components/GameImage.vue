<template>
  <div class="game-box">
    <img class="game-image" src="../assets/images/call-of-duty-wwii.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'GameImage',
  props: {
    image: {
      type: String,
      required: true
    },
  },
  computed: {
    returnImage(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables.scss';

.game-box{
  width: 262px;
  height: 230px;
  background-color: $soft-peach;
  border-radius: 3px;
  position: relative;
}

.game-image{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
