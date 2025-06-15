// src/root/RootControllerAdapter.ts
import { BaseController } from './BaseController';

export function rootController(rawModel: any, rawOptions?: any) {
  class Controller extends BaseController {
    save(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    // Implement required methods
    async update() {
      // Original update logic here
    }
  }

  const instance = new Controller(rawModel, rawOptions);
  
  // Return both class instance and spread properties for compatibility
  return {
    ...instance,
    // Explicitly expose methods to ensure they're not lost
    update: instance.update.bind(instance),
    save: instance.save.bind(instance)
  };
}