<template>
  <div class="detail">
      <div class="title">
          <img :src="user.avatar" :alt="user.username" :title="user.username">
          <h3>{{title}}</h3>
          <div class="auther">
              <span class="user"><router-link :to="`/user/${user.id}`">{{user.username}}</router-link></span>
              <span class="time">{{createdAt.substr(0, 10)}}</span>
          </div>
      </div>
      <div class="markdown" v-html="markdown">

      </div>
  </div>
</template>

<script src="./template.js"></script>

<style lang="less" scoped  src="./template.less"></style>
