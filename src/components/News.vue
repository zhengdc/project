<template>
  <div>
    <el-card>
      <div style="margin-bottom: 20px;">
        <el-button type="danger" size="small" @click="add">发布新闻</el-button>
      </div>
      <el-table :data="singlePages" border style="width: 100%" header-align="center">
        <el-table-column prop="index" label="ID" width="80" align="center" type="index">
        </el-table-column>
        <el-table-column prop="title" label="新闻标题" width="350" align="center">
        </el-table-column>
        <el-table-column prop="content" label="新闻摘要" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" align="center" width="180">
        </el-table-column>
        <el-table-column prop="click" label="点击率" align="center" width="180">
        </el-table-column>
        <el-table-column label="操作" align="center" width="180">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </el-card>
    <el-dialog title="发布新闻" :visible.sync="addPage" width="800px" center>
      <el-form status-icon label-width="100px" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="新闻标题" prop="name">
          <el-input type="text" maxlength="10" v-model="ruleForm.name" show-word-limit placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="新闻分类" prop="category">
          <el-select v-model="ruleForm.category" placeholder="请选择新闻分类" style="width: 100%;">
            <el-option label="热点新闻" value="hot"></el-option>
            <el-option label="实时新闻" value="now"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input type="text" maxlength="10" v-model="ruleForm.author" show-word-limit placeholder="请输入作者"></el-input>
        </el-form-item>
        <el-form-item label="封面" prop="cover">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="详细内容" prop="cont">
          <el-input type="textarea" rows="5" maxlength="100" v-model="ruleForm.cont" show-word-limit placeholder="请输入内容"></el-input>
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
        imageUrl: '',
        bt: true,
        id: 0,
        ruleForm: {
          name: '',
          category: '',
          author: '',
          cover: '',
          cont: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          category: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          author: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          cont: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }]
        },
        singlePages: [{
            title: '公司成立10周年',
            content: '公司是依照公司法在中国境内设立的有限责任公司和股份有限公司，是以营利为目的的企业法人',
            date: '2018-10-6',
            click: 100
          },
          {
            title: '月销售记录保持者',
            content: '公司是依照公司法在中国境内设立的有限责任公司和股份有限公司，是以营利为目的的企业法人',
            date: '2018-10-6',
            click: 100
          },
          {
            title: '公司组织户外活动',
            content: '公司是依照公司法在中国境内设立的有限责任公司和股份有限公司，是以营利为目的的企业法人',
            date: '2018-10-6',
            click: 100
          }
        ],
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
              content: this.ruleForm.cont,
              date: '2018-10-20',
              click: '200'
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
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style>
  .el-table {
    margin: auto;
  }
  .el-pagination{
    margin: 50px 0 20px 0;
    text-align: center;
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
