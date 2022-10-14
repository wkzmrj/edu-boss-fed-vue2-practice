<template>
    <div class="advert-edit">
    <create-or-edit :isEdit="true"></create-or-edit>
    </div>
  </template>
<script>
import CreateOrEdit from './components/CreateOrEdit'
export default {
  name: 'AdvertEdit',
  components: {
    CreateOrEdit
  }
}
</script>
<style lang="scss" scoped></style>
