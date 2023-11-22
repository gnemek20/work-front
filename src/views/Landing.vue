<template>
  <div>
    <div ref="sticky-header" class="sticky-header">
      <div ref="header" class="header">
        <div class="flex">
          <h1>타이틀</h1>
        </div>
        <div class="flex align-center">
          <div class="category">
            <h4>Warm</h4>
            <h4>Cool</h4>
            <h4>Daily</h4>
            <h4>Lovely</h4>
          </div>
          <div ref="header-state" class="state">
            <div class="state-image">
              <img src="@/assets/icons/user.svg" width="21px">
            </div>
            <div class="state-image">
              <img src="@/assets/icons/steamed.svg" width="21px">
            </div>
            <div class="state-image">
              <img src="@/assets/icons/cart.svg" width="21px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="@/assets/banner.jpg">
    </div>
    <div class="content">
      <div>
        <div class="title">
          <h2>Arrivals</h2>
          <p>최근 들어온 신상품</p>
          <hr>
        </div>
        <div class="flex justify-center">
          <div class="list">
            <p v-for="count in 10" v-bind:key="count">{{ count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    addEventListener("scroll", this.scrolling);
  },
  methods: {
    scrolling() {
      const positionY = window.scrollY;
      const stickyHeader = this.$refs['sticky-header'];
      const header = this.$refs['header'];
      const headerState = this.$refs['header-state'];

      const uncolored = 'transparent';
      const colored = '#f0ece9'

      const white = 'var(--white)';
      const black = 'var(--black)';

      const uninverted = 'invert(0)';
      const inverted = 'invert(1)';

      if (positionY >= 250 && stickyHeader.style.backgroundColor !== colored) {
        stickyHeader.style.backgroundColor = colored;
        header.style.color = black;
        headerState.style.filter = uninverted;
      }
      else if (positionY < 250 && stickyHeader.style.backgroundColor !== uncolored) {
        stickyHeader.style.backgroundColor = uncolored;
        header.style.color = white;
        headerState.style.filter = inverted;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sticky-header {
  position: fixed;
  z-index: 1;
  left: 0;
  width: calc(100% - 200px);
  padding: 50px 100px 20px;
  transition-duration: 300ms;

  .header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--white);

    .category {
      display: flex;
      gap: 50px
    }
    .category > * {
      cursor: pointer;
    }

    .state {
      margin-left: auto;
      display: flex;
      gap: 50px;
      filter: invert(1);

      .state-image {
        padding: 5px;
      }
    }
    .state > * {
      cursor: pointer;
      display: flex;
    }
  }
}
.sticky-header * {
  transition-duration: 50ms;
}

.banner {
  display: flex;
  height: 600px;
  border-bottom: 1px solid var(--white);
  filter: brightness(0.75);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content {
  margin-top: 100px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    hr {
      width: 50px;
      border: 0;
      border-top: 1px solid dimgray !important;
    }
  }
  .list {
    justify-content: center;
    width: 100%;
    max-width: 1400px;
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 252px);
    grid-auto-rows: 352px;
    gap: 25px;
  }
}
</style>