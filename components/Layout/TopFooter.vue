<template>
  <div class="top-footer">
    <div class="container-fluid pb-3">
      <div class="row">
        <!-- Footer Widget Starts -->
        <div class="col-md-2">
          <h4 class="pl-4 font-weight-bolder"><i class="tim-icons icon-chat-33"></i> {{$t('WEB.COMMUNITY')}}</h4>
          <div class="menu">
            <ul class="text-uppercase font-weight-normal">
              <li><a class="font-weight-bold color-gold" href="https://community.smartholdem.io"><i
                  class="tim-icons icon-chat-33"></i> Forum </a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://t.me/smartholdem/"><i
                  class="fab fa-telegram-plane"></i> Telegram</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://twitter.com/smartholdem"><i
                  class="fab fa-twitter"></i> Twitter</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://twitter.com/dexgamesnet"><i
                  class="fab fa-twitter"></i> Twitter 2</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold"
                     href="https://www.youtube.com/channel/UC5m98uMBjEQeFSfKag8X4-Q"><i class="fab fa-youtube"></i>
                YouTube</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold"
                     href="https://bitcointalk.org/index.php?topic=2169457.0"><i class="fab fa-bitcoin"></i>
                BitcoinTalk</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://www.instagram.com/smartholdem/"><i
                  class="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>

        <div class="col-md-2">
          <h4 class="pl-4 font-weight-bolder"><i class="tim-icons icon-book-bookmark"></i> {{$t('WEB.RES')}}</h4>
          <div class="menu">
            <ul class="text-uppercase font-weight-normal">
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://blockexplorer.smartholdem.io/">BlockExplorer</a>
              </li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://github.com/smartholdem">GitHub</a>
              </li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://api.smartholdem.io/">API</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://dexgames.net">DEX Games</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://onlinewallet.smartholdem.io/">Online
                Wallet</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://ex.xbts.io">DEX Exchange</a></li>
              <li><a target="_blank" class="font-weight-bold color-gold" href="https://app.xbts.io">DeFi</a></li>
            </ul>
          </div>
        </div>

        <div class="col-md-4">
          <h4 class="pl-4"><i class="tim-icons icon-book-bookmark"></i> Contact Us </h4>
          <div class="menu">
            <ul class="font-weight-normal">
              <li><a target="_blank" href=""><i class="fas fa-info-circle"></i> FAQ</a></li>
              <li><a class=""><i class="far fa-envelope"></i> contact@smartholdem.io</a></li>
            </ul>
          </div>
          <div class="social-footer pl-4">
            <Socials/>
          </div>
        </div>

        <div class="col-md-4">
          <div class="facts-footer">
            <h4 class="pl-4 font-weight-bolder"><i class="tim-icons icon-paper"></i> {{$t('WEB.LEGAL')}}</h4>
            <div class="menu">
              <ul class="text-uppercase font-weight-normal">
                <li>
                  <router-link to="/legal-limitations" class="font-weight-bold color-gold"> Disclaimers and Limitation of
                    Liability
                  </router-link>
                </li>
                <li>
                  <router-link to="/legal-terms" class="font-weight-bold color-gold"> Terms and Conditions</router-link>
                </li>
                <li>
                  <router-link to="/legal-warranties" class="font-weight-bold color-gold"> Disclaimer of Warranties
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import Socials from '@/components/xbts/Socials.vue';

export default {
  name: 'TopFooter',
  components: {
    Socials,
  },
};
</script>

<style scoped>
  .top-footer {
    padding: 10px 0 0;
    /* background: #fff;*/
  }

  .top-footer h4 {
    text-transform: uppercase;
    margin-top: 0;
    font-size: 16px;
    margin-bottom: 15px;
  }

  .top-footer .menu ul li {
    margin-bottom: 5px;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .menu ul {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }

  top-footer ul {
    padding: 0;
  }

  .color-orangered {
    color: orangered;
  }

  .top-footer a {
    color: #009ff3 !important;
  }

  .top-footer a:hover {
    color: #ff64f2 !important;
  }
</style>
