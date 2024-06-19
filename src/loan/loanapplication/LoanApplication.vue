<template>
  <crud-form @save="save" @update="update" @search="search" @updateDialog="updateDialog" @reset="reset" @done="done"
    @updateCrudTableDialog="updateCrudTableDialog" @resetCrudTableDialog="resetCrudTableDialog" :path="path"
    :maxWidth="maxWidth">
    <template slot="heading">Loan Application</template>

    <template slot="form-data">
     
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Applicant Id" v-model="loanApplication.applicantId" :rules="applicantRules"
          append-icon="mdi-view-list" @click:append="appendIconCallback"></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Name" v-model="loanApplication.name" disabled></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Primary Phone No" v-model="loanApplication.primaryPhoneNo" disabled></v-text-field>
      </v-col>

       <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Other Phone Nos" v-model="loanApplication.otherPhoneNos" disabled></v-text-field>
      </v-col>

      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Address" v-model="loanApplication.addressDetails" disabled></v-text-field>
      </v-col>


      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Collateral Category" v-model="loanApplication.collateralCategoryId"
          :rules="collateralCategoryIdRules" :counter="100" required
          :items="$store.state.lookup.lookupdata.collateralCategories"
          :loading="$store.state.lookup.lookupdata.collateralCategoriesLoading" item-text="lookupDataName"
          item-value="id"></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-text-field label="Collateral Description" v-model="loanApplication.collateralDesc"
          :rules="collateralDescRules" :counter="100" required></v-text-field>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Estimated Collateral Value" v-model="loanApplication.estimatedCollateralValue"
          :rules="estimatedCollateralValueRules" :counter="200" required></s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-date-picker label="Application Date" v-model="loanApplication.applicationDate"
          :rules="applicationDateRules" />
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Loan Product" v-model="loanApplication.loanProduct" :rules="loanProductRules" :counter="100"
          required :items="$store.state.loan.loanproduct.mini" :loading="$store.state.loan.loanproduct.miniLoading"
          item-text="productName" item-value="id" return-object></v-select>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <s-number-input label="Amount" v-model="loanApplication.amount" :rules="amountRules" :counter="100" required>
        </s-number-input>
      </v-col>
      <v-col :cols="cols" :sm="sm" :md="md">
        <v-select label="Guarantors" v-model="loanApplication.guarantors" :rules="guarantorsRules" :counter="100"
          required :items="$store.state.profile.profile.mini" :loading="$store.state.profile.profile.miniLoading"
          item-text="display" item-value="id" multiple append-icon="mdi-view-list"
          @click:append="guarantorAppendIconCallback"></v-select>
      </v-col>
    </template>
  </crud-form>
</template>
<script>
import loanApplicationModel from "./LoanApplicationModel";
import CrudForm from "../../components/CrudForm.vue";
import SDatePicker from '../../components/SDatePicker.vue';
import profileNav from '../../profile/profile/ProfileNav';
export default {
  components: { CrudForm, SDatePicker },
  name: "LoanApplication",
  data: () => ({
    cols: 12,
    sm: 3,
    md: 4,
    maxWidth: 1000,
    path: loanApplicationModel.path,
    loanApplication: loanApplicationModel.loanApplication,
    applicantRules: [(v) => !!v || "Applicant is required"],
    collateralCategoryIdRules: [
      (v) => !!v || "Collateral Category is required",
    ],
    collateralDescRules: [
      (v) => !!v || "Collateral Description is required",
      (v) =>
        v.length < 100 ||
        "Collateral Description length must be less or equal to 100",
    ],
    estimatedCollateralValueRules: [
      (v) => !!v || "Estimated Collateral Value is required",
    ],
    applicationDateRules: [(v) => !!v || "Application Date is required"],
    loanProductRules: [(v) => !!v || "Loan Product is required"],
    amountRules: [(v) => !!v || "Amount is required"],
    guarantorsRules: [(v) => !!v || "Guarantors is required"],
    menu: false,
    profileNav: profileNav,
    isGuarantor: false,
    
  }),
  created() {
    this.$store.dispatch("profile/profile/getMini");
    this.$store.dispatch("lookup/lookupdata/getCollateralCategories");
    this.$store.dispatch("lookup/getRequestStatuses");
    this.$store.dispatch("loan/loanproduct/getMini");
  },
  computed: {
    applicantId() {
      return this.loanApplication.applicantId;
    },

    selectedData() {
      return this.$store.state.search.selectedMiniItem;
    },

    searchedObject() {
      return this.$store.state.obj;
    },
  },

  watch: {
    applicantId() {
      if (!this.isGuarantor) {
        this.$store.commit("obj", null);
        if (this.applicantId) {
          this.$store.dispatch("get", `${profileNav.menu.path}/${this.applicantId}`);

        }
      }
    },

    selectedData() {

      let selectedData = this.selectedData;
      if (selectedData) {
        var id = selectedData.id;
        if (this.isGuarantor) {
          this.loanApplication.guarantors.push(id)
        } else {
          this.loanApplication.applicantId = id;
        }
      }
    },


    searchedObject() {
      let selectedData = this.$store.state.obj;
      if (selectedData) {
        if (!this.isGuarantor) {
          this.loanApplication.name = selectedData.displayKey;
          this.loanApplication.addressDetails = selectedData.addressDetails;
          this.loanApplication.primaryPhoneNo = selectedData.primaryPhoneNo
           this.loanApplication.otherPhoneNos = selectedData.otherPhoneNos
          
        }
      }
    },

  },

  methods: {
    save() {
      this.$store.dispatch("post", {
        path: this.path,
        body: this.loanApplication,
      });
    },
    update() {
      this.$store.dispatch("put", {
        path: `${this.path}/${this.loanApplication.id}`,
        body: this.loanApplication,
      });
    },
    updateDialog() {
      var obj = this.$store.state.search.selectedData[0].value;
      this.setDialog(obj);
    },
    async search() {
      var obj = this.$store.state.obj;
      this.loanApplication = Object.assign({}, obj);
      this.setObjects(obj);
    },
    reset() {
      this.loanApplication.clear();
    },
    setObjects(obj) {
      this.loanApplication.guarantors = obj.guarantors.map(g=>g.guarantorId);
      this.loanApplication.applicationDate = obj.applicationDate;
      console.log(obj);
    },
    setDialog(obj) {
      this.loanApplication = Object.assign({}, obj);
      this.setObjects(obj);
    },
    done() {
      this.$store.commit(
        "crudtable/data",
        Object.assign({}, this.loanApplication)
      );
    },
    updateCrudTableDialog() {
      this.setDialog(this.$store.state.crudtable.data);
    },
    resetCrudTableDialog() {
      this.reset();
    },
    getFormData() {
      var data = new FormData();
      data.append("applicant", this.loanApplication.applicant);
      data.append(
        "collateralCategoryId",
        this.loanApplication.collateralCategoryId
      );
      data.append("collateralDesc", this.loanApplication.collateralDesc);
      data.append(
        "estimatedCollateralValue",
        this.loanApplication.estimatedCollateralValue
      );
      data.append("applicationDate", this.loanApplication.applicationDate);
      data.append("loanProduct", this.loanApplication.loanProduct);
      data.append("amount", this.loanApplication.amount);
      data.append("guarantors", this.loanApplication.guarantors);

      return data;
    },

    appendIconCallback() {
      this.isGuarantor = false;
      this.openDialog();


    },

    guarantorAppendIconCallback() {
      this.isGuarantor = true;
      this.openDialog();
    },

    openDialog() {
      let miniSelected = { path: profileNav.menu.path, name: profileNav.menu.name, headers: profileNav.menu.miniHeaders };
      this.$store.commit("search/miniSelected", miniSelected);
      this.$store.dispatch("search/getMiniData");
      this.$store.commit("search/miniDialog", true);
    },
  },
};
</script>
