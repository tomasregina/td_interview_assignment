<template>
  <div>
    <div class="container">
      <img :src="icon" alt="" class="icon">
    </div>
    <div>
      <span class="title">{{ title }}</span>
    </div>
    <div>
      <span class="descr"> {{ descr }}</span>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    title: String,
    descr: String
  }

}
</script>
<style lang="postcss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 30px;
}
.descr {
  font-size: 14px;
}
div {
  text-align: center;
}
</style>
