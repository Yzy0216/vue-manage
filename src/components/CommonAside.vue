<template>
<div>
  <!-- 一级菜单 -->
<el-menu style="height=100%" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <h3 >{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
   <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
    <i :class="'el-icon-'+item.icon"></i>
    <span slot="title">{{item.label}}</span>
  </el-menu-item>
  <!-- 二级菜单 -->
  <el-submenu  v-for="item in hasChildren" :index="item.path" :key="item.path">
    <template slot="title">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </template>
    <el-menu-item-group v-for="subItem in item.children" :key="subItem.path" >     
      <el-menu-item  @click="clickMenu(subItem)"  :index="subItem.path">
      <i :class="'el-icon-'+subItem.icon"></i>
    <span slot="title"> {{subItem.label}}</span>
       </el-menu-item>
    </el-menu-item-group> 
  </el-submenu>
</el-menu></div>
</template>

<script>
  export default {
    data() {
      return {
      
        menu:[
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/setting',
              name: 'setting',
              label: '设置',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/charts',
              name: 'charts',
              label: '图表',
              icon: 'star-on',
              url: 'Other/PageTwo'
            },
             {
              path: '/edit',
              name: 'edit',
              label: '编辑',
              icon: 'edit',
              url: 'Other/PageThree'
            },
             {
              path: '/warning',
              name: 'warning',
              label: '说明',
              icon: 'warning',
              url: 'Other/PageFour'
            }
          ]
        }
      ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
          name:item.name        
        })
        this.$store.commit('seletcMenu',item)
      },
      
     
    },  
    computed:{
      noChildren(){
        return this.menu.filter(item=>!item.children)
      },
      hasChildren(){
        return this.menu.filter(item=>item.children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }
    }
  
  }
</script>
<style land="less" scoped>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu{
   
    border:none;
  }
   h3{
        color: #fff;
      text-align:center;
      line-height: 48px;
      } 
  
</style>