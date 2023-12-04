<template>
  <div>
    <Header />
    <div class="cover">
      <div class="image-cover">
        <img src="@/assets/cover1.jpg">
      </div>
      <div class="cover-box">
        <div class="name">
          <h1>Perfume</h1>
        </div>
        <div class="condition-box">
          <h4>상품을 검색하거나 표시될 상품의 조건을 설정할 수 있는 창</h4>
        </div>
      </div>
      <div class="product-content">
        <div class="title">
          <h2>태그</h2>
          <p>설명</p>
          <hr>
        </div>
        <div class="flex justify-center">
          <div class="list">
            <p class="cursor-pointer" v-for="count in 10" v-bind:key="count" @click="$query('/detail', {productId: count})">{{ count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  position: relative;

  .image-cover {
    display: flex;
    width: 100%;
    height: 100%;
    filter: brightness(0.5);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .cover-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
    width: 100%;
    height: calc(100% - 80px);
    margin: auto;

    .name {
      text-align: center;
      color: var(--white);
    }
    .condition-box {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      width: calc(900px - 40px);
      height: calc(250px - 40px);
      padding: 20px;
      background-color: rgba(#f5f5f5, 0.8);
    }
  }
  .product-content {
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
}
</style>