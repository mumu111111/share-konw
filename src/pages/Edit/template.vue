<template>
  <div class="edit">
    <h2>编辑文章</h2>
    <h3>标题</h3>
    <el-input type="textarea" v-model="title" :rows="1" maxlength="30" resize="none" clearable></el-input>
    <!-- <span>限30个字</span> -->
    <h3>简介</h3>
    <el-input type="textarea" v-model="description" :rows="3" maxlength="200" resize="none" clearable></el-input>
    <!-- <span>限200个字</span> -->
    <h3>内容</h3>
    <el-input type="textarea" v-model="content" :rows="10" maxlength="10000" resize="none"></el-input>
    <!-- <span>限10000个字</span> -->
    <div class="isIndex">
        <label for="">是否展示到首页</label>
        <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </div>
    <el-button @click="onEdit">保存</el-button>
 </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less">
@import "../../assets/var";
.create {
  position: relative;
  h2 {
    font-size: 20px;
    line-height: 28px;
    font-weight: normal;
    text-align: center;
    margin: 20px 0;
  }
  h3 {
    font-size: 16px;
    line-height: 23px;
    font-weight: normal;
    margin-bottom: 15px;
    margin-top: 25px;
  }
  span {
    font-size: 12px;
    line-height: 18px;
    color: @textLighterColor;
    position: absolute;
    right: 0;
  }
  .el-input,
  .el-textarea {
    margin-bottom: 10px;
  }
  .el-button {
    background-color: #439641;
    color: white;
    font-size: 16px;
    margin-top: 20px;
  }
}
</style>
