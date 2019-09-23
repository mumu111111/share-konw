<template>
    <div class="user">
        <div class="auth">
            <img :src="user.avatar" :alt="user.username" :title="user.username">
            <h3>{{user.username}}</h3>
        </div>
        <template v-for="blog in blogs">
            <router-link class="indexBlog-wrapper" :to="`/detail/${blog.id}`">
                <!-- 年 月份 日 -->
                <div class="day">
                    <span>{{blog.createdAt.substr(8,2)}}</span>
                </div>
                <div class="year-month">    
                    <span class="month">{{month[parseInt(blog.createdAt.substr(5,2))]}}</span>
                    <span class="year">{{blog.createdAt.substr(0,4)}}</span>
                </div>
                <h3>{{ blog.title }}<span>发布 于{{ friendlyDate(blog.createdAt) }}</span></h3>
                <p>{{ blog.description }}</p>
            </router-link>
        </template>
        <el-pagination
         background
         layout="prev, pager, next"
         :total="total"
         class="pagination"
         :current-page.sync="page"
         @current-change="onchangePage"
        ></el-pagination>
    </div>

</template>

<script src="./template.js"></script>

<style lang="less" scoped  src="./template.less"></style>

