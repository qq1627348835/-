<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="login">登陆</div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.box {
  width: 2rem;
  height: 2rem;
  background-color: gold;
}
.login {
  width: 700px;
  height: 200px;
  background-color: skyblue;
  margin: auto;
}
</style>
