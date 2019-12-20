<template>
  <div>
    <el-card>
      <div style="margin-bottom: 20px;">
        <el-button type="danger" size="small" @click="add">新增链接</el-button>
      </div>
      <el-table :data="singlePages" border style="width: 100%" header-align="center">
        <el-table-column prop="index" label="ID" width="180" align="center" type="index">
        </el-table-column>
        <el-table-column prop="title" label="链接名称" width="200" align="center">
        </el-table-column>
        <el-table-column prop="url" label="链接地址" align="center">
        </el-table-column>
        <el-table-column prop="des" label="链接说明" width="300" align="center">
        </el-table-column>
        <el-table-column prop="date" label="添加时间" width="180" align="center">
        </el-table-column>

        <el-table-column label="操作" align="center" width="250">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="新增链接" :visible.sync="addPage" width="700px" center>
      <el-form status-icon label-width="100px" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="链接名称" prop="name">
          <el-input type="text" maxlength="10" v-model="ruleForm.name" show-word-limit placeholder="请输入链接名称"></el-input>
        </el-form-item>
        <el-form-item label="链接地址" prop="urls">
          <el-input type="text" maxlength="30" v-model="ruleForm.urls" show-word-limit placeholder="请输入链接地址"></el-input>
        </el-form-item>
        <el-form-item label="链接说明" prop="desc">
          <el-input type="textarea" rows="5" maxlength="100" v-model="ruleForm.desc" show-word-limit placeholder="请输入链接说明"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addData('ruleForm')" v-if="bt">立即新增</el-button>
          <el-button type="primary" @click="changeData('ruleForm')" v-if="!bt">立即修改</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bt: true,
        id: 0,
        ruleForm: {
          name: '',
          urls: '',
          desc:''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入链接名称',
            trigger: 'blur'
          }],
          urls: [{
            required: true,
            message: '请输入链接地址',
            trigger: 'blur'
          }],
          desc: [{
            required: true,
            message: '请输入链接描述',
            trigger: 'blur'
          }]
        },
        singlePages: [{
          title: '百度',
          url:'https://www.baidu.com',
          des:'百度首页',
          date:'2018-04-02'
        }],
        addPage: false,
      }
    },
    methods: {
      index(index) {
        return index++
      },
      add() {
        this.bt = true
        this.addPage = true
        this.ruleForm = {}
      },
      // 新增
      addData(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.singlePages.push({
              title: this.ruleForm.name,
              url: this.ruleForm.urls,
              des: this.ruleForm.desc,
              date:'2017-06-15'
            })
            this.addPage = false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // 修改
      changeData(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.singlePages[this.id].title = this.ruleForm.name
            this.singlePages[this.id].url = this.ruleForm.urls
            this.singlePages[this.id].des = this.ruleForm.desc
            this.addPage = false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //编辑
      handleEdit(index, row) {
        this.bt = false
        this.addPage = true
        this.ruleForm.name = row.title
        this.ruleForm.cont = row.content
        this.id = index
      },
      // 删除
      handleDelete(index, row) {
        this.singlePages.splice(index, 1)
      }
    }
  }
</script>
<style>
  .el-table {
    margin: auto;
  }
</style>
