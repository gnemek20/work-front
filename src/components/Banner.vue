<template>
  <div class="banner">
    <img :ref="`banner${++index}`" class="hide-image" :src="image" v-for="(image, index) in images" v-bind:key="index">
    <div class="state">
      <div class="buttons">
        <label :for="number" class="relative" v-for="number in images.length" v-bind:key="number">
          <input :ref="`radio${number}`" type="radio" :id="number" name="image" @click="clickRadioButton(number)">
          <span class="button" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      count: 1,
      show: 'show-image',
      hide: 'hide-image',
      imagesCount: 0,
      images: [
        require('@/assets/banner1.jpg'),
        require('@/assets/banner2.jpg'),
        require('@/assets/banner3.jpg'),
        require('@/assets/banner4.jpg')
      ]
    }
  },
  mounted() {
    this.imagesCount = this.images.length;
    this.clickRadioButton(1);
  },
  methods: {
    changeImages(number) {
      this.count = number;
      this.interval = setInterval(() => {
        this.count ===  this.imagesCount ? this.count = 1 : this.count++;

        const beforeImage = this.$refs[`banner${this.count - 1 === 0 ? this.images.length : this.count - 1}`][0];
        const image = this.$refs[`banner${this.count}`][0];
        const radioButton = this.$refs[`radio${this.count}`][0];

        beforeImage.className = this.hide;
        image.className = this.show;
        radioButton.checked = true;
      }, 8000);
    },
    clickRadioButton(number) {
      this.clearThisInterval();
      const beforeImage = this.$refs[`banner${this.count}`][0];
      const image = this.$refs[`banner${number}`][0];
      const radioButton = this.$refs[`radio${number}`][0];

      beforeImage.className = this.hide;
      image.className = this.show;
      radioButton.checked = true;

      this.count === this.imagesCount ? this.count = 1 : this.count++;
      this.changeImages(number);
    },
    clearThisInterval() {
      clearInterval(this.interval);
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .show-image {
    opacity: 1;
    transition-duration: 2500ms;
  }
  .hide-image {
    opacity: 0;
    transition-duration: 1500ms !important;
  }

  .state {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    .buttons {
      margin-top: auto;
      margin-bottom: 15px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      opacity: 0.75;

      input[type="radio"] {
        display: none;
      }
      input[type="radio"]:checked + .button {
        background: white;
      }
      .button {
        cursor: pointer;
        display: block;
        width: 40px;
        height: 5px;
        background: dimgray;
      }
    }
  }
}
</style>