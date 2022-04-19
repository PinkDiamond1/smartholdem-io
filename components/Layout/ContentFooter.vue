<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/terms" class="text-info"><i class="tim-icons icon-notes"></i> Terms of Use</router-link>
        </li>
      </ul>
      <div class="copyright">
        &copy; 2017 - {{ new Date().getFullYear() }} SmartHoldem Platform <small>v.{{version}}</small>
      </div>
    </div>
  </footer>
</template>
<script>
import packageJson from '../../package.json'
export default {
  data() {
    return {
      version: packageJson.version,
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
