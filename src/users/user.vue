<template>
  <div><el-button type="primary"  @click="dialogVisible = true">添加新用户</el-button>

<el-dialog
  title="添加新用户"
  :visible.sync="dialogVisible"
  width="30%"
 @close="onDialogClosed">
  <!-- 添加用户表单 -->
<el-form :model="form" label-width="80px" :rules="rules" ref="myaddForm">
  <el-form-item label="用户姓名" prop="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item> 
   <el-form-item label="用户年龄" prop="age">
    <el-input v-model="form.age"></el-input>
  </el-form-item> 
   <el-form-item label="用户职位" prop="position">
    <el-input v-model="form.position"></el-input>
  </el-form-item> 

</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="onAddNewUser">确 定</el-button>
  </span>
</el-dialog>
<!-- 列表页 -->
<div style="margin-top:20px"><el-table
      :data="userList"
      style="width: 100%"  border stripe
      >
     <!-- //索引列 -->
<el-table-column type="index"></el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"></el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"></el-table-column>
       <el-table-column
        prop="position"
        label="职位"></el-table-column>
      <el-table-column
        label="创建时间">
        <template v-slot:default="scope">
          {{scope.row.addtime | dateFormat}}
          </template></el-table-column>
           <el-table-column label="操作">
          <template v-slot="{row}">
            <div>
             <el-button type="warning" ><router-link :to="'/users/'+row.id">详情</router-link></el-button> &nbsp
               <el-button type="danger" @click.prevent="onRemove(row.id)">删除</el-button>
            </div>
          </template>
          </el-table-column>

    </el-table></div>

</div>
</template>

<script>

export default {
name:'user',
    data() {
    
      return {
        dialogVisible: false,
        userList:[],
        form:{
          name:'',
          age:'',
          position:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '请输入用户年龄', trigger: 'blur' },
        
          
           
          ],
          position: [
            { required: true, message: '请输入用户职位', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ]}
      };
   
    },
    created(){
  this.getUserList()
},
    methods:{
  //请求用户列表的数据
  async getUserList(){
    const {data:res}=await this.$http.get('/api/users')
    //res.status==0表示数据请求成功，否则请求 失败！
    if(res.status!==0) return console.log('用户列表请求失败')
    this.userList=res.data
   
  },

      //重置弹出框
  onDialogClosed(){
        this.$refs.myaddForm.resetFields()
      },

      //添加学习信息
  onAddNewUser(){
    this.$refs.myaddForm.validate(async valid=>{
      if(!valid)return
      const {data:res}=await this.$http.post('/api/users',this.form)
      if(res.status!==0){
        return this.$message.error('添加失败')}
        else
      { this.$message.success('添加成功')}
     
      this.dialogVisible=false
      this.getUserList()

    })
  },
   async onRemove(id) {
        const confirmResult=await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err=>err)
        if(confirmResult!=='confirm')return this.$message.info('取消了删除！')
        const {data:res}=await this.$http.delete('/api/users/'+id)
        if(res.status!==0)return this.$message.error('删除失败')
        this.$message.success('删除成功')
        this.getUserList()
      }
}
    
  };


</script>

<style>

</style>