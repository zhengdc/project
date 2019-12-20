<template>
  <div class="login">
    <div class="login_form">
      <h3>后台系统登录</h3>
      <el-form status-icon :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="" prop="username">
          <el-input type="text" v-model="ruleForm.username" clearable> <i slot="prefix" class="el-input__icon el-icon-user"></i></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" v-model="ruleForm.password" show-password clearable> <i slot="prefix" class="el-input__icon el-icon-lock"></i></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Login('ruleForm')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          password: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 12,
              message: '长度在 6 到 12 个字符',
              trigger: 'blur'
            }
          ]
        }

      }
    },
    methods: {
      Login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.$store.dispatch('changeUsername',this.ruleForm.username);
             this.$router.push('index')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style>
  .login {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url(../assets/login_bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .login_form {
    width: 400px;
    margin: 300px auto;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .login_form .el-button {
    width: 100%;
  }

  .login_form h3 {
    text-align: center;
    font-weight: normal;
  }
</style>
