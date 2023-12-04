<template>
  <div class="header">
    <div class="top-box">
      <div class="notice-box">
        <h5>notice</h5>
      </div>
      <div class="sign-box" v-if="$session.get('id') === undefined">
        <div @click="$query('/signin', {beforePageLocation: $route.path.replace('/', '')})">
          <h5>로그인</h5>
        </div>
        <div>
          <h5>회원가입</h5>
        </div>
      </div>
      <div class="sign-box" v-else>
        <div @click="signOut">
          <h5>로그아웃</h5>
        </div>
        <div>
          <h5>정보수정</h5>
        </div>
      </div>
    </div>
    <div class="bottom-box">
      <div class="flex">
        <div class="flex cursor-pointer" @click="$push('/')">
          <h1>타이틀</h1>
        </div>
      </div>
      <div class="flex align-center">
        <div class="category">
          <div :ref="`category${index}`" class="category-text" v-for="(category, index) in categories" v-bind:key="index" @mouseenter="hoveredCategory(index)" @mouseleave="leavedCategory(index)" @click="$push(category.route)">
            <h4>{{ category.name }}</h4>
          </div>
        </div>
        <div class="state">
          <div @click="$push('/member')">
            <img src="@/assets/icons/user.svg" width="21px">
          </div>
          <div @click="$push('/steamed')">
            <img src="@/assets/icons/steamed.svg" width="21px">
          </div>
          <div>
            <img src="@/assets/icons/cart.svg" width="21px">
          </div>
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
          name: 'Perfume',
          route: '/product'
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
    },
    signOut() {
      this.$session.destroy();
      this.$reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  padding: 0px 100px 10px;
  background-color: var(--light-gray);
  gap: 10px;

  .top-box {
    position: absolute;
    left: 0;
    display: flex;
    padding: 0px 100px;
    width: calc(100% - 200px);
    background-color: var(--light-gray);

    .notice-box > * {
      padding: 5px;
    }
    .sign-box {
      margin-left: auto;
      display: flex;
      gap: 20px;
    }
    .sign-box > * {
      cursor: pointer;
      padding: 5px;
    }
  }
  .bottom-box {
    margin-top: 47px;

    .category {
      display: flex;
      gap: 50px;
  
      .category-text {
        cursor: pointer;
        padding: 7px;
        border-bottom: 2px solid transparent;
      }
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