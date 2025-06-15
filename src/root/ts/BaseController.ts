import { ref, Ref } from "vue";

// src/core/BaseController.ts
export abstract class BaseController {
  protected model: Ref<any>;
  protected rootState: Ref<any>;
  protected options: any;

  constructor(rawModel: any, rawOptions?: any) {
    // Initialize reactive properties similar to your current rootController
    this.model = ref(rawModel.model);
    this.rootState = ref({
      id: "",
      valid: false,
      // ... other rootState properties
    });
    this.options = ref(rawOptions || {});
  }

  abstract save(): Promise<void>;
  abstract update(): Promise<void>;
  // ... other common methods
}