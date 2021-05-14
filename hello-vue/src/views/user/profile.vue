<template>
   <div>
      <h1>个人信息</h1>
  <!--  接受参数 必须在标签内-->
<!--     {{$route.params.id}}-->
     {{id}}
   </div>
</template>

<script>
    export default {
        props:['id'],
        name: "UserProfile",
      //类似于拦截器 chair
        beforeRouteEnter:(to,from,next)=>{
           console.log("进入路由之前");
           next(vm=>{
             vm.getData();//进入路由之前执行这个方法
           });
        },
      beforeRouteLeave:(to,from,next)=>{
        console.log("进入路由之前");
        next();
      },
      methods:{
          getData:function () {
            this.axios({
              method:'get',
              url:'http://localhost:8080/static/mock/data.json'
            }).then(function (response) {
              console.log(response);

            });
          }
      }
    }
</script>

<style scoped>

</style>
