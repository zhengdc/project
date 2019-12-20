<template>
  <div class="home">
    <el-container>
      <el-header height="8vh">
        <h2>后台管理系统</h2>
        <div class="loginInfo">
          <el-button type="text" style="color: #000000;"><i class="iconfont icon-shouye"></i>&nbsp;&nbsp;系统前台首页</el-button>&nbsp;&nbsp;
          <router-link to="/"><i class="el-icon-switch-button"></i>安全退出</router-link>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="/index" :router="true" class="el-menu-vertical-demo" background-color="#545c64"
            text-color="#fff" active-text-color="#ffd04b" :unique-opened="true">
            <el-menu-item index="/index">
              <i class="iconfont icon-shouye"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/SinglePageList">
              <i class="iconfont icon-danyemoshi-"></i>
              <span slot="title">单页管理</span>
            </el-menu-item>
            <el-menu-item index="/Product">
              <i class="iconfont iconfont icon-chanpin"></i>
              <span slot="title">产品管理</span>
            </el-menu-item>
            <el-menu-item index="/News">
              <i class="iconfont iconfont icon-xinwen"></i>
              <span slot="title">新闻管理</span>
            </el-menu-item>
    <!--        <el-menu-item index="/Category">
              <i class="iconfont iconfont icon-leimupinleifenleileibie"></i>
              <span slot="title">分类管理</span>
            </el-menu-item> -->
            <el-menu-item index="/Links">
              <i class="iconfont iconfont icon-icon-test"></i>
              <span slot="title">友情链接管理</span>
            </el-menu-item>
            <el-menu-item index="/MessageList">
              <i class="iconfont iconfont icon-liuyan"></i>
              <span slot="title">留言管理</span>
            </el-menu-item>
            <el-menu-item index="/Manager">
              <i class="iconfont iconfont icon-guanliyuan"></i>
              <span slot="title">管理员管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>欢迎使用后台管理系统</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style>
  a{
    color: #000;
    text-decoration: none;
    font-size: 14px;
  }
  .home {
    overflow: hidden;
  }

  .home .el-header {
    background-color: #f5f5f5;
    line-height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .home .el-header h2 {
    line-height: 0;
    font-weight: normal;
  }
  .loginInfo {
    display: flex;
  }
  .el-aside>.el-menu {
    height: 92vh;
  }
  .el-footer {
    background-color: #f5f5f5;
    text-align: center;
    line-height: 60px;
  }

   .el-submenu .el-menu-item {
    min-width: 199px;
  }
  .el-menu i {
    color: #f5f5f5;
  }

  .el-menu .el-submenu__title i {
    color: #f5f5f5;
  }
</style>
