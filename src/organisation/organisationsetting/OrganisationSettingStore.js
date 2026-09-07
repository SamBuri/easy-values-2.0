import { defineStore } from "pinia";
import organisationSettingNav from "./OrganisationSettingNav";
import { defineRootStore } from "saburi-vue-utils";

export const defineOrganisationSettingStore = defineStore("organisationSettingStore", {
  state: () => ({
    path: organisationSettingNav.menu.path,
    mini: [],
    miniLoading: false,
    resolvedSettings: [],
    resolvedSettingsLoading: false,
  }),
  actions: {
    getMini() {
      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      return rootStore.fetch(`${this.path}/mini`,
        () => {
          this.miniLoading = true;
          this.mini = [];
        },
        res => this.mini = res.data,
        () => this.miniLoading = false
      );
    },
    async getResolvedSettings(organisationId) {
      const rootStore = defineRootStore();
      const endpoint = organisationId
        ? `${this.path}/resolved?organisationId=${organisationId}`
        : `${this.path}/resolved`;
      this.resolvedSettingsLoading = true;
      try {
        const res = await rootStore.get({ path: endpoint });
        this.resolvedSettings = res || [];
        return this.resolvedSettings;
      } catch (err) {
        console.error("Failed to fetch resolved settings:", err);
        return [];
      } finally {
        this.resolvedSettingsLoading = false;
      }
    },
    getSettingValue(propertyName, defaultValue = null) {
      if (!this.resolvedSettings || this.resolvedSettings.length === 0) return defaultValue;
      const found = this.resolvedSettings.find(s => s.propertyName === propertyName);
      return found?.propertyValue || defaultValue;
    }
  }
});
