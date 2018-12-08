<template>
  <div class="findLis">
    <el-col :span="6">
      <div class="elem-brl">
        <img src="/static/img/gg2.jpg" alt="食品热销">
      </div>
    </el-col>
    <el-col :span="18">
      <div class="elem-brr">
        <h4>{{name}}</h4>
        <p class="js">{{desc}}</p>
        <p class="p1">月售{{xl}}份</p>
        <p class="p2"><i>￥</i>{{price}}元</p>

          <div class="shopControl">

             <transition name="fadeRotate">
               <div v-show="myFood.count>=1" v-on:click="jNum" class="jHao">

                 <svg class="icon" aria-hidden="true">
                   <use xlink:href="#icon-jian"></use>
                 </svg>
               </div>
             </transition>

              <div v-show="myFood.count>=1" class="numCount">{{myFood.count}}</div>


              <div v-on:click="addNum" class="jiaHao">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiahao"></use>
                </svg>
              </div>

          </div>

      </div>
    </el-col>
    <div style="clear:both;"></div>
    <div class="clearfix"></div>

  </div>
</template>
<script>
  import Vue from "vue";
  import {mapMutations, mapState} from "vuex";
  export default {
    props:[
      'idArr',
      'myFood'
    ],
    data () {
      return {
        nummber:0,
        arrdetail:{},

        name:'',
        desc:"",
        xl:'',
        price:'',

      }
    },
    components: {

    },
    mounted(){
      this.getDetail();

    },
    methods:{
      ...mapMutations([
        'vxaddCart',
        'vxdecreaseCart'
      ]),
      getDetail(){
        this.$ajax.get('../static/json/findlist.json').then((res)=> {
          // console.log(res.data)
          for(let i = 0;i < res.data.length;i++){
            if(res.data[i].id === this.idArr){
              this.arrdetail = res.data[i]
            }
          }

          this.name = this.arrdetail.name;
          this.desc = this.arrdetail.des;
          this.xl = this.arrdetail.xl;
          this.price = this.arrdetail.price;

        })
      },
      addNum(){

        this.nummber++;
        this.showNumParen([this.nummber,this.price,true]);
        if (typeof this.myFood.count === 'undefined') {
          Vue.set(this.myFood, 'count', 0)
          Vue.set(this.myFood, 'active', true)
          // Vue.set 可以直接往data里或接收的数据中添加
          // this.$set 需要执行函数的时候传值过来 然后往传递的值里添加
          // this.food.count = 0
        }
        this.myFood.count++
        // 默认为true
        if (this.myFood.active) {
          this.vxaddCart(this.myFood)
          this.myFood.active = false
        }

      },
      jNum(){
        this.nummber--;
        if(this.nummber <= 0 ){
          this.nummber = 0;
        }
        this.showNumParen([this.nummber,this.price,false]);
        this.myFood.count--
        if (this.myFood.count === 0) {
          this.vxdecreaseCart(this.myFood)
        }
      },
      showNumParen(data){
        this.$emit('listenToChildEvent',data);
      }
    }
  }
</script>
<style lang="less">

</style>

