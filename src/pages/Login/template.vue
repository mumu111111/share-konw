<template>
  <div class="login">
      <h4>用户名</h4>
      <el-input placeholder="用户名"></el-input>
      <p class="error">

      </p>
      <h4>密码</h4>
      <el-input type="password" placeholder="密码"></el-input>
      <p class="error">
          
      </p>
      <el-button>立即登录</el-button>
      <p>没有账户？<router-link to="/register">注册新用户</router-link></p>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" scoped src="./template.less"></style>
