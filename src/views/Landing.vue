<template>
  <div>
    <div class="sticky-header">
      <div class="header">
        <div class="flex">
          <h1>타이틀</h1>
        </div>
        <div class="flex">
          <div class="category">
            <h4>Warm</h4>
            <h4>Cool</h4>
            <h4>Daily</h4>
            <h4>Lovely</h4>
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
    </div>
    <div class="banner">
      <div class="banner-image">
        <img src="@/assets/banner.jpg">
      </div>
    </div>
    <div class="content">
      <div>
        <div class="title">
          <h2>Arrivals</h2>
          <p>최근에 들어온 신상품</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sticky-header {
  position: fixed;
  left: 0;
  width: calc(100% - 100px);
  padding: 25px 50px 0px;

  .header {
    display: flex;
    flex-direction: column;
    gap: 10px;

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
    }
    .state > * {
      cursor: pointer;
      display: flex;
    }
  }
}

.banner {
  display: flex;
  height: 450px;
  border-bottom: 1px solid dimgray;

  .banner-image > img {
    width: 100vw;
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
}
</style>