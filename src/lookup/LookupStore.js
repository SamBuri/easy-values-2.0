import { defineStore } from "pinia";
// import httpMethods from "@/utils/HttpMethods";
import { defineRootStore } from "@/root/RootStore";

export const defineLookupStore = defineStore("lookup", {
  state: () => ({
    path: "enums/",
    documentTypes: [],
    documentTypesLoading: false,
    entryModes: [],
    entryModesLoading: false,
    journalTypes: [],
    journalTypesLoading: false,
    accountTypes: [],
    accountTypesLoading: false,
    accountActions: [],
    accountActionsLoading: false,
    accountReports: [],
    accountReportsLoading: false,
    customerTypes: [],
    customerTypesLoading: false,
    priceGroups: [],
    priceGroupsLoading: false,
    businessGroups: [],
    businessGroupsLoading: false,
    vatBusinessGroups: [],
    vatBusinessGroupsLoading: false,
    vatItemGroups: [],
    vatItemGroupsLoading: false,
    accountGroups: [],
    accountGroupsLoading: false,
    itemCategoryGroups: [],
    itemCategoryGroupsLoading: false,
    invoiceTypes: [],
    bankAccountTypes: [],
    bankAccountTypesLoading:false,
    genders: [],
    gendersLoading: false,
    workTypes: [],
    workTypesLoading: false,
    requestStatuses: [],
    requestStatusesLoading: false,
    openStatuses: [],
    openStatusesLoading: false,
    unitMeasureUsages: [],
    unitMeasureUsagesLoading: false,
  }),

  actions: {
    async getDocumentTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/documenttypes",
        () => {
          this.documentTypesLoading = true;
          this.documentTypes = [];
        },

        (res) => (this.documentTypes = res.data),

        () => (this.documentTypesLoading = false)
      );
      return data;
    },

    async getItemCategoryGroups() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/itemcategorygroups",
        () => {
          this.itemCategoryGroupsLoading = true;
          this.itemCategoryGroups = [];
        },

        (res) => (this.itemCategoryGroups = res.data),

        () => (this.itemCategoryGroupsLoading = false)
      );
      console.log("ItemCategoryGroups", data);
      return data;
    },

    async getEntryModes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/entrymodes",
        () => {
          this.entryModesLoading = true;
          this.entryModes = [];
        },
        (res) => (this.entryModes = res.data),

        () => (this.entryModesLoading = false)
      );
      return data;
    },

    async getJournalTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/journaltypes",
        () => {
          this.journalTypesLoading = true;
          this.journalTypes = [];
        },
        (res) => (this.journalTypes = res.data),

        () => (this.journalTypesLoading = false)
      );
      return data;
    },

    async getAccountTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/accounttypes",
        () => {
          this.accountTypesLoading = true;
          this.accountTypes = [];
        },
        (res) => (this.accountTypes = res.data),

        () => (this.accountTypesLoading = false)
      );
      return data;
    },

    async getAccountActions() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/accountactions",
        () => {
          this.accountActionsLoading = true;
          this.accountActions = [];
        },
        (res) => (this.accountActions = res.data),

        () => (this.accountActionsLoading = false)
      );
      return data;
    },

    async getAccountReports() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/accountreports",
        () => {
          this.accountReportsLoading = true;
          this.accountReports = [];
        },
        (res) => (this.accountReports = res.data),

        () => (this.accountReportsLoading = false)
      );
      return data;
    },

    async getCustomerTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/customertypes",
        () => {
          this.customerTypesLoading = true;
          this.customerTypes = [];
        },
        (res) => (this.customerTypes = res.data),

        () => (this.customerTypesLoading = false)
      );
      return data;
    },

    async getPriceGroups() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/pricegroups",
        () => {
          this.priceGroupsLoading = true;
          this.priceGroups = [];
        },
        (res) => this.priceGroups = res.data,

        () => this.priceGroupsLoading = false
      );
      return data;
    },

    async getBusinessGroups() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/businessgroups",
        () => {
          this.businessGroupsLoading = true;
          this.businessGroups = [];
        },
        (res) => (this.businessGroups = res.data),

        () => (this.businessGroupsLoading = false)
      );
      return data;
    },

    async getVatBusinessGroups() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/vatbusinessgroups",
        () => {
          this.vatBusinessGroupsLoading = true;
          this.vatBusinessGroups = [];
        },
        (res) => (this.vatBusinessGroups = res.data),

        () => (this.vatBusinessGroupsLoading = false)
      );
      return data;
    },

    async getVatItemGroups() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/vatitemgroups",
        () => {
          this.vatItemGroupsLoading = true;
          this.vatItemGroups = [];
        },
        (res) => (this.vatItemGroups = res.data),

        () => (this.vatItemGroupsLoading = false)
      );
      return data;
    },

    async getAccountGroups() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/accountgroups",
        () => {
          this.accountGroupsLoading = true;
          this.accountGroups = [];
        },
        (res) => (this.accountGroups = res.data),

        () => (this.accountGroupsLoading = false)
      );
      return data;
    },

    async getInvoiceTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/invoicetypes",
        () => {
          this.invoiceTypesLoading = true;
          this.invoiceTypes = [];
        },
        (res) => (this.invoiceTypes = res.data),

        () => (this.invoiceTypesLoading = false)
      );
      return data;
    },

    async getBankAccountTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/bankAccounttypes",
        () => {
          this.bankAccountTypesLoading = true;
          this.bankAccountTypes = [];
        },
        (res) => (this.bankAccountTypes = res.data),

        () => (this.bankAccountTypesLoading = false)
      );
      return data;
    },

    async getGenders() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/genders",
        () => {
          this.gendersLoading = true;
          this.genders = [];
        },
        (res) => (this.genders = res.data),

        () => (this.gendersLoading = false)
      );
      return data;
    },

    async getWorkTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/worktypes",
        () => {
          this.workTypesLoading = true;
          this.workTypes = [];
        },
        (res) => (this.workTypes = res.data),

        () => (this.workTypesLoading = false)
      );
      return data;
    },

    async getRequestStatuses() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/requeststatuses",
        () => {
          this.requestStatusesLoading = true;
          this.requestStatuses = [];
        },
        (res) => (this.requestStatuses = res.data),

        () => (this.requestStatusesLoading = false)
      );
      return data;
    },

    async getOpenStatuses() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/openstatuses",
        () => {
          this.openStatusesLoading = true;
          this.openStatuses = [];
        },
        (res) => (this.openStatuses = res.data),

        () => (this.openStatusesLoading = false)
      );
      return data;
    },

    async getUnitMeasureUsages() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        "enums/unitmeasureusages",
        () => {
          this.unitMeasureUsagesLoading = true;
          this.unitMeasureUsages = [];
        },
        (res) => (this.unitMeasureUsages = res.data),

        () => (this.unitMeasureUsagesLoading = false)
      );
      return data;
    },



  },
});
