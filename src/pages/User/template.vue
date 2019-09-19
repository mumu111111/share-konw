<template>
    <div class="user">
        <div class="auth">
            <img src="" alt="">
            <h3>用户</h3>
        </div>
        <template v-for="blog in blogs">
            <router-link :to="`/detail/${blog.id}`">
                
                年 月份 日
                wblog
                发布时间
                 
            </router-link>
        </template>
        <el-pagination
         :total="total"
         :page="page"

        ></el-pagination>
    </div>



</template>

<script src="./template.js"></script>

<style lang="less" scoped  src="./template.less"></style>

