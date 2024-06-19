<template>
  <v-app>
    <v-navigation-drawer app dark v-model="drawer">
      <side-bar-nav />
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark dense>
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="(authStore.authenticated)" />


      <v-toolbar-title class="mr-3">Easy values  </v-toolbar-title>


      <div v-if="tenantStore.hasBraches" class="mx-3">

         <v-icon small>mdi-source-branch</v-icon>{{ branchStore.getBranchName }}
         <v-icon small  @click="currentBranchDialog=true">mdi-arrow-down-drop-circle-outline</v-icon>
        <v-dialog v-model="currentBranchDialog" width="300"  persistent>
          <current-branch :dialog="currentBranchDialog" @close="closeCurrentBranch"></current-branch>
        </v-dialog>

      </div>

      <v-progress-linear :active="$store.state.loading" :indeterminate="$store.state.loading" absolute bottom
        color="deep-purple accent-4"></v-progress-linear>


      <v-spacer></v-spacer>
      <div v-if="authStore.authenticated">
        <top-right-menu />
      </div>
      <!-- <template v-slot:extension>
        <snack-bar/>
      </template> -->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app primary dense>
      <p><span>@Powered by Capidattex Consults Ltd</span></p>
    </v-footer>
  </v-app>
</template>

<script setup>

import { jsPDF } from "jspdf";
import SideBarNav from "./nav/SideBarNav.vue";
import TopRightMenu from "./components/TopRightMenu.vue";
import CurrentBranch from "./organisation/branch/CurrentBranch.vue";
import httmMethods from './utils/HttpMethods';
import tenantNav from './organisation/tenant/TenantNav';
import { useAuthStore } from "./store/authstore";
import { defineBranchStore } from "./organisation/branch/BranchStore";
import { defineTenantStore } from "./organisation/tenant/TenantStore";
import { computed, ref, onMounted } from "vue";
    const drawer = ref(false)
    const authStore = useAuthStore();
    const branchStore = defineBranchStore();
    const tenantStore = defineTenantStore();
    const currentBranchDialog = ref(false);
    const closeCurrentBranch = ()=>{currentBranchDialog.value=false}


    onMounted(()=>{
       tenantStore.getFirstTenant();
    });

</script>
















<!--
<script>
import SideBarNav from "./nav/SideBarNav.vue";
import { jsPDF } from "jspdf";

import TopRightMenu from "./components/TopRightMenu.vue";
import CurrentBranch from "./organisation/branch/CurrentBranch.vue";
import httmMethods from './utils/HttpMethods';
import tenantNav from './organisation/tenant/TenantNav';

// import funcs from './utils/funcs'
export default {
  name: "App",
  components: {
    SideBarNav, TopRightMenu, CurrentBranch

  },

  data: () => ({
    drawer: false,
    branchName: "",
    testRes:false
  }),

  created() {
    this.loadTenant();
    this.setBranchName();

  },



  computed: {
    loggedIn() {

      return this.$store.state.security.user.loggedIn;
    },

    currentBranch() {
      return this.$store.state.security.user.currentBranch;

    },


    hasBraches() {
      let tenant = this.$store.state.security.user.tenant;
      if (tenant) {
        return tenant.company.branches.length > 0
      }
      return false;
    },

    isBranchSet() {
      if (this.currentBranch !== null) {
        return true
      }
      else { return !this.hasBraches }
    }
  },

  watch: {
    currentBranch() {
      this.setBranchName();
    },
  },

  methods: {
    openDialog() {
      // this.testPDF();
      this.$store.commit("security/user/currentBranchDialog", true)
    },
    testAction(){
        const authStore = useAuthStore();
        authStore.testAction();

       this.test= authStore.test;
    },
    setBranchName() {
      let currentBranch = this.$store.state.security.user.currentBranch;
      if (currentBranch) { this.branchName = currentBranch.branchName; }
      else { this.branchName = "No Branch"; }
    },

  loadTenant(){
  var tenant = this.$store.state.security.user.tenant;
  console.log("Tenant found: ", tenant)
  if (!tenant) {
    let host = location.host;
    console.log("Host: ", host);
    httmMethods.getNoHeaders(`${tenantNav.menu.path}/mini/host/${host}`)
    .then(response => {
      console.log('Response ', response)
      let res = response.data;

      console.log('Response Data', res)
      this.$store.commit("security/user/tenant", res);

      if (res == null) console.log("No tenant found for the host: ", host);
      return res;

    }).catch(e => {

      console.log(e);
      return null;

    });
    console.log("Loading Client: ", tenant)

  }
},


    testPDF() {

      // var options = {
      //   orientation: 'p',
      //   unit: 'mm',
      //   format: 'a4',
      //   putOnlyUsedFonts: true
      // }

      const doc = new jsPDF();
      var img = new Image()
        img.src = '/Users/samburiima/Downloads/jpeg-image-file-12.jpeg'

      doc.setFont("helvetica", "bold");
      doc.setFontSize(20)
      doc.setTextColor(255, 0, 0);

      if(this.company){
        // var imageData = new ImageData(this.company.logo, 40, 40);
      // var file= funcs.createFileFromBytes(this.company.logo);
        // doc.addImage(file, 'PNG', 10, 10, 40, 40);
      doc.text(this.company.companyName, 60, 10)

      }
      doc.setFontSize(10)
      doc.setTextColor(0, 0, 0);
      doc.text("Name", 10, 20);
      doc.text("Sam Buriima", 50, 20);
      doc.line(0, 12, 500, 12)
      doc.save("a4.pdf");
      // save(filename, options)
    }

  }


};
</script> -->

<style>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}

tbody tr:nth-of-type(odd) {
  background-color: rgb(250, 250, 250);
}

.v-data-table-header {
  background-color: rgba(182, 183, 187);
  color: white;
}

.v-data-footer {
  background-color: rgb(250, 250, 250);
}

.theme--light.v-data-table thead tr th {
  color: white;
}
</style>



