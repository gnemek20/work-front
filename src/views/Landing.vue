<template>
  <div>
    <div ref="sticky-header" class="sticky-header">
      <div ref="header" class="header">
        <div class="flex">
          <h1>타이틀</h1>
        </div>
        <div class="flex align-center">
          <div class="category">
            <div :ref="`category${index}`" class="category-text" v-for="(category, index) in categories" v-bind:key="index" @mouseenter="hoveredCategory(index)" @mouseleave="leavedCategory(index)">
              <h4>{{ category.name }}</h4>
            </div>
          </div>
          <div ref="state-header" class="state">
            <div class="state-image" @click="$push('/member')">
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
      <Banner />
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
            <p v-for="count in 5" v-bind:key="count">{{ count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Banner
  },
  data() {
    return {
      categories: [
        {
          name: 'Perfume'
        }
      ]
    }
  },
  mounted() {
    addEventListener("scroll", this.scrolling);
    this.$session.destroy();
  },
  methods: {
    scrolling() {
      const positionY = window.scrollY;
      const stickyHeader = this.$refs['sticky-header'];
      const header = this.$refs['header'];
      const stateHeader = this.$refs['state-header'];

      const uncolored = 'transparent';
      const colored = 'var(--light-gray)';

      const white = 'var(--white)';
      const black = 'var(--black)';

      const uninverted = 'invert(0)';
      const inverted = 'invert(1)';

      if (positionY >= 250 && stickyHeader.style.backgroundColor !== colored) {
        stickyHeader.style.backgroundColor = colored;
        header.style.color = black;
        stateHeader.style.filter = uninverted;
      }
      else if (positionY < 250 && stickyHeader.style.backgroundColor !== uncolored) {
        stickyHeader.style.backgroundColor = uncolored;
        header.style.color = white;
        stateHeader.style.filter = inverted;
      }
    },
    hoveredCategory(index) {
      const category = this.$refs[`category${index}`][0];
      category.style.borderBottom = '2px solid';
    },
    leavedCategory(index) {
      const category = this.$refs[`category${index}`][0];
      category.style.borderBottom = '2px solid transparent';
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
      gap: 50px;

      .category-text {
        cursor: pointer;
        padding: 7px;
        border-bottom: 2px solid transparent;
      }
    }

    .state {
      margin-left: auto;
      display: flex;
      gap: 50px;
      filter: invert(1);

      .state-image {
        padding: 7px;
        border-bottom: 2px solid transparent;
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