<template>
  <div class="welcome">
    <el-card class="box-card">
     <i class="el-icon-info"></i>&nbsp;欢迎<b>{{this.$store.state.username}}</b>登录后台管理系统
    </el-card>
    <el-card class="author">
     <p>制作者：zhengdc</p>
     <p>联系方式：zhengdc0920(微信)</p>
    </el-card>
  </div>
</template>

<script>
</script>

<style>
  .author{
    margin-top: 20px;

  }
</style>
