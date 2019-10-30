<template>
    <div class="my">
        <div class="auth">
            <!-- <img :src="user.avatar" :alt="user.username" :title="user.username"> -->
            <h3>{{user.username}}</h3>
        </div>
        <template v-for="blog in blogs">
            <router-link class="indexBlog-wrapper" :to="`/detail/${blog.id}`">
                <!-- 年 月份 日 -->
                <div class="day">
                    <span class="day">{{blog.createdAt.substr(8,2)}}</span>
                </div>
                <div class="year-month">    
                    <span class="month">{{month[parseInt(blog.createdAt.substr(5,2))]}}</span>
                    <span class="year">{{blog.createdAt.substr(0,4)}}</span>
                </div>
                <h3>{{ blog.title }}<span>{{ friendlyDate(blog.createdAt) }}</span></h3>
                <p>{{ blog.description }}</p>
                <div class="actions">
                    <!-- router-link 跳转 -->
                    <router-link :to="`/edit/${blog.id}`">编辑</router-link>
                    <!-- a连接  点击 阻止默认事件 -->
                    <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
                </div>
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

