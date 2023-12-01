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
        <div class="form">
          <div class="inputs">
            <div class="flex">
              <input type="text" placeholder="아이디">
            </div>
            <div class="flex">
              <input type="password" placeholder="비밀번호">
            </div>
          </div>
          <div class="flex">
            <button>로그인</button>
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

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray);

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid var(--gray);
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
    border: 1px solid #8c8c8c;
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
          border: 1px solid #8c8c8c;
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
      border-top: 1px solid #8c8c8c;
      gap: 50px;

      .option-text:hover {
        cursor: pointer;
        color: #adadad;
      }
    }
  }
}
</style>