<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <!-- <h3 style="color:#fff">首页</h3> -->
     
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path:item.name}">{{item.label}}</el-breadcrumb-item>

</el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img :src="userImg" class="user">
        </span>
      <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item @click="onLogout">退出登录</el-dropdown-item>

  </el-dropdown-menu>

      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState}from 'vuex'
export default {
  name:'CommonHeader',
  data(){
    return{
      userImg:require('@/assets/images/user.png')
    }
  },
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    },
    onLogout(){
      this.$router.push('/login')
    }
  },
  computed:{
    ...mapState({
      tags:state=>state.tab.tabsList
    })
  }
}
</script>

<style lang="less" scoped>

header{
  display: flex;
  height: 100% !important;
  justify-content: space-between;
  align-items: center;
  background: rgb(147, 189, 218);
}


.l-content{
  height: 100%;
  display: flex;
  align-items: center;
    .el-button{
      margin-right: 20px;
    }
}
.r-content{
   .user{
     width: 40px;
     height: 40px;
     border-radius: 50%;
   }
}
</style>