<template>
  <div class="flex flex-column align-center">
    <div class="header">
      <div class="title">
        <h1>타이틀</h1>
      </div>
      <hr>
    </div>
    <div class="content">
      <div class="flex justify-center">
        <h4>로그인</h4>
      </div>
      <div class="area">
        <div class="form" @keydown.enter="signIn">
          <div class="inputs">
            <div class="flex">
              <input type="text" ref="id" v-model="user.id" placeholder="아이디" @keydown.space.prevent>
            </div>
            <div class="flex">
              <input type="password" ref="pwd" v-model="user.pwd" placeholder="비밀번호" @keydown.space.prevent>
            </div>
          </div>
          <div class="flex">
            <button @click="signIn">로그인</button>
          </div>
        </div>
        <div class="options">
          <div class="option-text">
            <h6>아이디 찾기</h6>
          </div>
          <div class="option-text">
            <h6>비밀번호 찾기</h6>
          </div>
          <div class="option-text">
            <h6>회원가입</h6>
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
      user: {
        id: '',
        pwd: ''
      }
    }
  },
  methods: {
    signIn() {
      const id = this.user.id;
      const pwd = this.user.pwd;

      if (id.length === 0 || pwd.length === 0) return;

      this.$post('/users/signin', {
        user: this.user
      }).then((res) => {
        if (res.status === 200 && res.data.status) {
          console.log('good');
        }
        else if (!res.data.status) {
          alert('아이디 혹은 비밀번호를 다시 확인해주세요');
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--light-gray);

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid var(--light-gray);
  }
  .title {
    padding: 60px 0px 26px;
  }
}

.content {
  margin-top: 60px;

  .area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 250px;
    padding: 20px;
    border: 1px solid var(--normal-gray);
    margin-top: 30px;

    .form {
      display: flex;
      gap: 10px;

      .inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;

        input {
          width: 300px;
          padding: 10px;
          border: none;
          border: 1px solid var(--normal-gray);
          outline: none;
          font-weight: bold;
        }
      }
      button {
        padding: 30px;
        background-color: var(--black);
        color: var(--white);
        border: none;
      }
      button:hover {
        cursor: pointer;
        background-color: #757575;
      }
    }
    .options {
      display: flex;
      margin-top: 30px;
      padding: 5px 20px 0px;
      border-top: 1px solid var(--normal-gray);
      gap: 50px;

      .option-text:hover {
        cursor: pointer;
        color: #adadad;
      }
    }
  }
}
</style>