<template>
  <div>
    <Header />
    <!-- 네이버 그라폴리오 -->
    <div class="cover">
      <div class="image-cover">
        <img src="@/assets/cover1.jpg">
      </div>
      <div class="cover-box">
        <div class="name">
          <h1>Perfume</h1>
          <h5>설명</h5>
        </div>
        <div class="condition-box">
          <!-- 태그랑 검색기능 추가 -->
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
  }
}
</script>

<style lang="scss" scoped>
.cover {
  display: flex;
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
      width: 900px;
      height: 250px;
      background-color: rgba(#f5f5f5, 0.8);
    }
  }
}
</style>