<template>
  <div class="login">
    <h2>手机号密码登录</h2>
    <div class="input">
      <input type="number" v-model="phone" @input="isInput" placeholder="输入手机号">
    </div>
    <div class="input">
      <input type="password" v-model="password" @input="isInput" placeholder="输入密码">
    </div>
    <div class="goIn">
      <input type="button" value="登录" class="btn" :disabled="disabled" :class="{'btn-gray': !canLogin}" @click="login">
      <!-- <button ></button> -->
      <p @click="$router.push({name: 'forget'})">忘记密码</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import md5 from 'md5'
import { Toast, Indicator } from 'mint-ui'
// import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      canLogin: false,
      phone: '15037183341',
      password: '123456',
      disabled: false
    }
  },
  methods: {
    login () {
      if (this.phone === '' || this.password === '') {
        Toast({
          message: '用户名或密码错误',
          position: 'top'
        })
        return false
      }
       Indicator.open({
            text: '登陆中...',
            spinnerType: 'fading-circle'
          })
      //登录
      this.$ajax.post('https://easy-mock.com/mock/5af2912fba54552178d987c1/vue/login', {
        telephone: this.phone,
        password: this.password
      }).then((data) => {
        console.log(data)
        if (data.statusText === 'OK') {
          Indicator.open({
            text: '登陆中...',
            spinnerType: 'fading-circle'
          })
          setInterval(() => {
            Indicator.close()
            this.$router.push({ name: 'getOrder' })
          }, 500)
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // ...mapActions([
    //   'setUserInfo',
    //   'setUserToken'
    // ]),
    isInput () {
      let reg = /^1[34578]\d{9}$/
      if (reg.test(this.phone) && this.password.length >= 6) {
        this.canLogin = true
        // this.disable=true
      } else {
        this.canLogin = false
      }
    }
  },
  mounted () {
    this.isInput()
    if (localStorage.getItem('__userAccount__')) {
      let account = localStorage.getItem('__userAccount__')
      this.phone = account.split('&&')[0]
      this.password = account.split('&&')[1]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  width 100%
  height 100%
  box-sizing border-box
  background #ffffff
  overflow hidden
  padding-left 1.6rem
  padding-right 1.6rem
  color #08090A
  h2
    font-size 2rem
    margin-top 5.2rem
    margin-bottom 3rem
    text-align center
  .input
    height 1.4rem
    padding-top 1.8rem
    padding-bottom 1.8rem
    border-bottom 0.5px solid #D4D5D8
    input
      font-size 1.4rem
      height 1.4rem
      line-height 1.4rem
      width 100%
      outline none
  .goIn
    margin-top 2rem
    p
      color #08090A
      font-size 1.4rem
      line-height 1
      margin-top 1.6rem
      text-align center
    .btn
      outline none
      border none
</style>
