<template>
  <el-container style="height:100%">
  <el-aside width="auto" >
<common-side></common-side>
  </el-aside>
  <el-container>
    <el-header>
      <common-header></common-header>
    </el-header>
<common-tag></common-tag>
    <el-main>
       <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import CommonSide from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonTag from '@/components/CommonTag.vue'
export default {
name:'Mian',
components:{
  CommonSide,
  CommonHeader,
  CommonTag
},
data(){
  return{}
}
}
</script>

<style scoped land="less" >
.el-header{
  background-color: rgb(147, 189, 218);
}
.el-aside{
   background-color: #545c64;
}

.el-main{padding-top:0 ;}
</style>