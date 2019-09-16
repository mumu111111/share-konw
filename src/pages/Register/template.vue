<template>
    <div class="register">
      <h4>用户名</h4>
      <el-input placeholder="用户名" clearable v-model="username" @change="clearMessage"></el-input>
      <p class="error" v-if="usernameError">
       {{usernameMessage}}
      </p>
      <h4>密码</h4>
      <el-input type="password" clearable placeholder="密码" v-model="password" @keyup.enter.native="onRegister"></el-input>
      <p class="error" v-if="passwordError">
       {{passwordMessage}}   
      </p>
      
      <!-- <h4>确认密码</h4>
      <el-input type="password" placeholder="确认密码" v-model="username"></el-input>
      <p class="error">
          
      </p> -->
      <el-button size="medium" @click="onRegister">立即注册</el-button>
      <p>已有账户？<router-link to="/login">直接登录</router-link></p>
  </div>

</template>

<
<script src="./template.js"></script>

<style lang="less" scoped src="./template.less"></style>
