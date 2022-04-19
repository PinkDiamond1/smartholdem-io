<template>
  <base-nav
    v-model="showMenu"
    class="navbar-absolute top-navbar position-fixed"
    :class="navClass"
    type="dark"
    :transparent="transparent"
  >
    <div slot="brand" class="navbar-wrapper">

      <nuxt-link class="ml-1 nav-link text-success" :to="localePath('/')"><img class="sth-logo" src="/icon.png" style="border-radius: 0;"/> SmartHoldem</nuxt-link>
    </div>


      <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">

      <base-dropdown
          tag="li"
          :menu-on-right="!$rtl.isRTL"
          title-tag="a"
          class="nav-item"
          title-classes="nav-link"
          menu-classes="dropdown-navbar"
      >
        <template
            slot="title"
        >
          <div class="text-uppercase"><img style="border-radius: 0; padding-bottom:2px;"  width="24px" :src="'/flags/' + $i18n.locale + '.svg'"/></div>
          <b class="caret d-none d-lg-block d-xl-block"></b>
        </template>

        <li class="nav-link" v-for="locale in availableLocales"
            :key="locale.code"

        >
          <nuxt-link :to="switchLocalePath(locale.code)" class="nav-item dropdown-item">{{ locale.name }}</nuxt-link>
        </li>

      </base-dropdown>


        <!-- DD Wallets -->
        <base-dropdown
            v-if="!isElectron"
            tag="li"
            :menu-on-right="!$rtl.isRTL"
            title-tag="a"
            class="nav-item"
            title-classes="nav-link"
            menu-classes="dropdown-navbar"
        >
          <template
              slot="title"
          >
            <div class="d-none d-lg-block d-xl-block"></div>

            <el-tooltip
                :content="$t('APP.DOWNLOAD_WALLET')"
                effect="light"
                :open-delay="300"
                placement="left"
            >
              <span><i class="tim-icons icon-wallet-43"></i> {{$t('PG.WALLETS')}}</span>
            </el-tooltip>
            <!--<p class="d-lg-none">Download Wallet</p>-->
            <b class="ml-2 caret d-none d-lg-block d-xl-block"></b>
          </template>
          <li class="nav-link">
            <router-link class="nav-item dropdown-item text-primary" to="/wallet">
              <i class="tim-icons icon-planet"></i> Online
            </router-link>
          </li>
          <li class="nav-link">
            <router-link class="nav-item dropdown-item text-info" to="/wallets">
              <i class="fab fa-windows"></i> Windows
            </router-link>
          </li>
          <li class="nav-link">
            <router-link class="nav-item dropdown-item text-warning" to="/wallets">
              <i class="fab fa-apple"></i> MacOs
            </router-link>
          </li>

          <li class="nav-link">

            <span @click="openLink('https://play.google.com/store/apps/details?id=io.smartholdem.client')" class="nav-item dropdown-item text-green"><i class="fab fa-android"></i> Android</span>
          </li>
          <li class="nav-link">
            <span @click="openLink('https://snapcraft.io/smartholdem')" class="nav-item dropdown-item text-danger"><i class="fab fa-linux"></i> Linux</span>
          </li>

          <li class="nav-link">
            <router-link class="nav-item dropdown-item" to="/wallets">
              <i class="tim-icons icon-wallet-43"></i> {{$t('PG.ALL_WALLETS')}}
            </router-link>
          </li>

        </base-dropdown>

        <!-- DD Exchange -->
        <base-dropdown
            v-if="!isElectron"
            tag="li"
            :menu-on-right="!$rtl.isRTL"
            title-tag="a"
            class="nav-item"
            title-classes="nav-link"
            menu-classes="dropdown-navbar"
        >
          <template
              slot="title"
          >
            <div class="d-none d-lg-block d-xl-block"></div>
            <el-tooltip
                :content="$t('PG.TRADE')"
                effect="light"
                :open-delay="300"
                placement="left"
            >
              <span><i class="tim-icons icon-chart-bar-32"></i> {{$t('APP.EXCHANGE')}}</span>
            </el-tooltip>
            <b class="ml-1 caret d-none d-lg-block d-xl-block"></b>
            <!--<p class="d-lg-none">Download Wallet</p>-->
          </template>

          <li class="nav-link">
            <span @click="openLink('https://ex.xbts.io/market/BTS_XBTSX.STH')" class="nav-item dropdown-item text-dark"><i class="tim-icons icon-chart-bar-32"></i> DEX <span class="">{{$t('APP.EXCHANGE')}}</span></span>
          </li>

          <li class="nav-link">
            <span @click="openLink('https://app.xbts.io/#/pools')" class="nav-item dropdown-item text-dark"><i class="tim-icons icon-chart-pie-36"></i> <span class="">DeFi</span></span>
          </li>

          <li class="nav-link">
            <span @click="openLink('https://app.xbts.io/#/smartholder')" class="nav-item dropdown-item text-dark"><i class="tim-icons icon-money-coins"></i> <span class="">SmartHolder</span></span>
          </li>

          <li class="nav-link">
            <router-link class="nav-item dropdown-item" to="/rewarder">
              <i class="tim-icons icon-coins"></i> Rewarder
            </router-link>
          </li>




        </base-dropdown>
        <!-- DD Exchange END-->

        <router-link class="nav-item" tag="li" to="/roadmap">
          <el-tooltip
              :content="$t('PG.ROADMAP')"
              effect="light"
              :open-delay="300"
              placement="bottom"
          >
            <a class="nav-link">

              <i class="tim-icons icon-map-big sth-icons-24"></i> RoadMap
            </a>
          </el-tooltip>
        </router-link>

        <li class="nav-item">
          <nuxt-link class="nav-link" :to="localePath('/coin')">
            STH Specs
          </nuxt-link>
        </li>


        <li class="nav-item">
        <nuxt-link class="nav-link" :to="localePath('/ibounty')">
            iBounty
        </nuxt-link>
        </li>

        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://api.smartholdem.io">
            <i class="tim-icons icon-settings"></i> <span class="">API</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="ml-1 nav-link" target="_blank" href="https://blockexplorer.smartholdem.io">
            <i class="tim-icons icon-app"></i> <span class="">{{$t('PG.EXPLORER')}}</span>
          </a>
        </li>

    </ul>


  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';
import SidebarToggleButton from './SidebarToggleButton';

export default {
  components: {
    SidebarToggleButton,
    CollapseTransition,
    BaseNav,
    Modal
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    routeName() {
      const { path } = this.$route;
      let parts = path.split('/')
      return parts.map(p => this.capitalizeFirstLetter(p)).join(' ');
    },
    isRTL() {
      return this.$rtl.isRTL;
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: '',
      navClass: '',
      sticky: 120,
      transparent: true,
    };
  },
  methods: {
    openLink(url, type = '_blank') {
      if (process.browser) {
        window.open(url, type);
      }
    },
    onScroll() {
      if (window.pageYOffset >= this.sticky && window.pageYOffset < window.innerHeight) {
        this.navClass = 'nav-half-dark'
        //this.transparent = false;
      }else if (window.pageYOffset >= window.innerHeight) {
        this.navClass = 'nav-dark'
       // this.transparent = false;
      }
      else {
        this.navClass = '';
       // this.transparent = true;
      }
    },
    capitalizeFirstLetter(string) {
      if (!string || typeof string !== 'string') {
        return ''
      }
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    closeDropDown() {
      this.activeNotifications = false;
    },

    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },
  watch:{
    '$route' (to, from){
      this.showMenu = false;
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.onScroll();
    })
    window.addEventListener('scroll', this.onScroll);

  }
};
</script>
<style scoped>
.sth-logo {
  width: 26px;
  height:26px;
}
.top-navbar {
  top: 0px;
}

.nav-half-dark {
  background: linear-gradient(45deg, rgb(2 0 29 / 54%) 0%, rgb(2 0 29) 100%) !important;
  top: 0px;
  /*position: fixed !important;*/
}

.nav-dark {
  background: linear-gradient(45deg, rgb(21 17 40) 0%,rgb(0 1 10) 100%) !important;
  position: fixed !important;

  box-shadow: 1px 1px 0.4em #383e47;
 /* border-bottom: solid 1px #0086d5;*/
  top: 0px;
  padding: 0;
  margin-top:0px;



}

.xbts-logo {
  width: 118px;
}

.nav-half-dark .xbts-logo {
  width: 100px;
}
.nav-dark .xbts-logo {
  width: 80px;

}
@media (max-width: 900px) {
  .navbar .dropdown .dropdown-menu li a {
    color: #fff !important;
  }
}

</style>
