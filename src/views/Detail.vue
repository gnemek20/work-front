<template>
  <div>
    <Header />
    <div class="flex justify-center">
      <div class="content">
        <div class="left">
          <div class="product-image-box">
            <img src="@/assets/detail1.jpg">
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="tag">
              <h5>Tag</h5>
            </div>
            <div class="title">
              <h2>{{ product.name }}</h2>
            </div>
          </div>
          <hr>
          <div class="middle">
            <div class="state">
              <div class="price">
                <h4>가격</h4>
                <p>{{ product.product_price }}원</p>
              </div>
              <div class="delivery">
                <h4>배송비</h4>
                <p>{{ product.delivery_price }}원</p>
              </div>
              <div class="total">
                <h4>최종 금액</h4>
                <h4>{{ Number(product.product_price) + Number(product.delivery_price) }}원</h4>
              </div>
            </div>
          </div>
          <hr>
          <div class="bottom">
            <div class="choice-box">
              <div class="steam">
                <button ref="steamButton" @click="clickSteamButton(product.steamed)">
                  <img ref="steamedImage" src="@/assets/icons/steamed.svg" width="21">
                </button>
              </div>
              <div class="cart">
                <button>장바구니</button>
              </div>
              <div class="purchase">
                <button>구매하기</button>
              </div>
            </div>
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
      product: {
        name: '개쩌는 이름',
        product_id: this.$route.query['productId'],
        product_price: '1',
        delivery_price: '0',
        steamed: false
      }
    }
  },
  mounted() {
    if (this.$session.get('id') !== undefined) {
      const steamButton = this.$refs['steamButton'];
      const steamedImage = this.$refs['steamedImage'];

      this.$post('/users/getProductSteamed', {
        id: this.$session.get('id'),
        product_id: this.product.product_id
      }).then((res) => {
        if (res.status === 200 && res.data.steamed) {
          this.product.steamed = res.data.steamed;
          steamButton.style.backgroundColor = '#ffdbeb';
          steamedImage.style.filter = 'invert(1)';
        }
      });
    }
  },
  methods: {
    clickSteamButton(steamed) {
      if (this.$session.get('id') === undefined) this.$query('/signin', {beforePageLocation: this.$route.path.replace('/', '')});
      else {
        const steamButton = this.$refs['steamButton'];
        const steamedImage = this.$refs['steamedImage'];

        if (steamed) {
          this.$post('/users/deleteProductSteamed', {
            id: this.$session.get('id'),
            product_id: this.product.product_id
          }).then((res) => {
            if (res.status === 200) {
              steamButton.style.backgroundColor = 'transparent';
              steamedImage.style.filter = 'none';
              this.product.steamed = false;
            }
          });
        }
        else {
          this.$post('/users/setProductSteamed', {
            id: this.$session.get('id'),
            product_id: this.product.product_id
          }).then((res) => {
            if (res.status === 200) {
              steamButton.style.backgroundColor = '#ffdbeb';
              steamedImage.style.filter = 'invert(1)';
              this.product.steamed = true;
            }
          });
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
  max-width: 1400px;
  padding: 0px 20px;
  gap: 40px;

  .left {
    display: flex;
    flex-direction: column;
    width: 50%;

    .product-image-box {
      display: flex;
      width: 100%;
      height: 600px;
      border: 1px solid var(--light-gray);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 30px;
    
    hr {
      border: none;
      border-top: 1px solid var(--light-gray);
    }

    .top {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .middle {
      .state {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .total {
          margin-top: 20px;
        }
      }
      .state > * {
        display: flex;

        h4 {
          width: 120px;
        }
      }
    }
    .bottom {
      .choice-box {
        display: flex;
        gap: 10px;

        .steam {
          display: flex;
          width: 100px;

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s;

            img {
              filter: none
            }
          }
        }
        .purchase {
          button {
            border-color: var(--black);
            background-color: var(--black);
            color: var(--white);
          }
        }
        button {
          cursor: pointer;
          border: 1px solid var(--normal-gray);
          width: 100%;
          background-color: transparent;
          color: var(--black);
        }
      }
      .choice-box > * {
        display: flex;
        width: 100%;
        height: 40px;
      }
    }
  }
}
</style>