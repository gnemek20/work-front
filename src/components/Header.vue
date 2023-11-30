<template>
  <div class="header">
    <div class="flex">
      <h1>타이틀</h1>
    </div>
    <div class="flex align-center">
      <div class="category">
        <div :ref="`category${index}`" class="category-text" v-for="(category, index) in categories" v-bind:key="index" @mouseenter="hoveredCategory(index)" @mouseleave="leavedCategory(index)">
          <h4>{{ category.name }}</h4>
        </div>
      </div>
      <div class="state">
        <div>
          <img src="@/assets/icons/user.svg" width="21px">
        </div>
        <div>
          <img src="@/assets/icons/steamed.svg" width="21px">
        </div>
        <div>
          <img src="@/assets/icons/cart.svg" width="21px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Warm'
        },
        {
          name: 'Cool'
        },
        {
          name: 'Daily'
        },
        {
          name: 'Lovely'
        }
      ]
    }
  },
  methods: {
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
.header {
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  padding: 50px 100px 20px;
  background-color: var(--gray);
  gap: 10px;

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
  }
  .state > * {
    cursor: pointer;
    display: flex;
    padding: 7px;
    border-bottom: 2px solid transparent;
  }
}
</style>