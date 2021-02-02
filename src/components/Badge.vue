<template>
  <div>
    <img :src="icon" alt="" class="icon">
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
