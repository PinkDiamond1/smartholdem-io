<template>
  <auth-layout class="not-found-page">
    <div class="centered" style="background: url('/images/about/slide9.png')">
      <h1><i class="not-found-icon nc-icon nc-puzzle-10"></i>404</h1>
      <p>{{$t('nav.404')}}</p>
    </div>
  </auth-layout>
</template>

<script>
export default {
  layout: 'default' //auth
};
</script>
<style lang="scss">
.not-found-page {
  .full-page > .content,
  .centered {
    min-height: calc(100vh - 160px);
  }
  .not-found-icon {
    margin-right: 10px;
  }
  .centered {
    h1,
    i {
      font-size: 50px;
    }
    p {
      font-size: 20px;
    }
    display: flex;
    padding-bottom: 150px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
}
</style>
