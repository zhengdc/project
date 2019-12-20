<template>
  <div>
    <el-card>
      <div style="margin-bottom: 20px;">
        <el-button type="danger" size="small" @click="add">新增产品</el-button>
      </div>
      <el-table :data="singlePages" border style="width: 100%" header-align="center">
        <el-table-column prop="index" label="ID" width="80" align="center" type="index">
        </el-table-column>
        <el-table-column prop="title" label="产品名称" align="center">
        </el-table-column>
        <el-table-column prop="category" label="产品分类" width="180" align="center">
        </el-table-column>
        <el-table-column prop="picture" label="产品图片" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.picture" class="picture" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发布时间" width="180" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center" width="250">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="新增产品" :visible.sync="addPage" width="800px" center>
      <el-form status-icon label-width="100px" :model="ruleForm" ref="ruleForm">
        <el-form-item label="产品名称" prop="name">
          <el-input type="text" maxlength="10" v-model="ruleForm.name" show-word-limit placeholder="请输入产品名称"></el-input>
        </el-form-item>
        <el-form-item label="产品分类" prop="cate">
          <el-select v-model="ruleForm.cate" placeholder="请选择产品分类" style="width: 100%;">
            <el-option label="鼠标" value="鼠标"></el-option>
            <el-option label="键盘" value="键盘"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品图片" prop="cover">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
          cate: ''
        },
        singlePages: [{
            title: '雷蛇无线鼠标',
            category: '鼠标',
            picture: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            date: '2017-05-03'
          },
          {
            title: '牧马人',
            category: '键盘',
            picture: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            date: '2017-05-04'
          }
        ],
        addPage: false,
        imageUrl: ''
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
              category: this.ruleForm.cate,
              picture: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
              date: '2018-09-20'
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
            this.singlePages[this.id].content = this.ruleForm.cont
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

  .picture {
    height: 70px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
