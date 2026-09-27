import { describe, it, expect } from 'vitest';
import dataImportNav, { importActions, onboardingModuleMapping } from '../../src/onboarding/DataImportNav';

describe('DataImport Mapping & Nav Configuration', () => {
  it('should define onboardingModuleMapping with 24 tabs', () => {
    const tabNames = Object.keys(onboardingModuleMapping);
    expect(tabNames.length).toBe(24);
    expect(tabNames).toContain('Profiles');
    expect(tabNames).toContain('Loan Products');
    expect(tabNames).toContain('Accounts');
    expect(tabNames).toContain('Financial Periods');
  });

  it('should define actions using navUtils.importRoles for each tab', () => {
    expect(onboardingModuleMapping['Profiles'].actions).toEqual(['profiles:all', 'profiles:import']);
    expect(onboardingModuleMapping['Loan Products'].actions).toEqual(['loan-products:all', 'loan-products:import']);
    expect(onboardingModuleMapping['Financial Periods'].actions).toEqual(['financial-periods:all', 'financial-periods:import']);

    Object.entries(onboardingModuleMapping).forEach(([name, config]) => {
      expect(Array.isArray(config.actions)).toBe(true);
      expect(config.actions.length).toBeGreaterThan(0);
      expect(config.actions.some(a => a.endsWith(':import'))).toBe(true);
    });
  });

  it('should set dataImportNav.menu.requires to all tab import actions', () => {
    expect(dataImportNav.menu.requires).toEqual(importActions);
    expect(dataImportNav.menu.requires).toContain('profiles:import');
    expect(dataImportNav.menu.requires).toContain('profiles:all');
    expect(dataImportNav.menu.requires).toContain('loan-products:import');
    expect(dataImportNav.menu.requires).toContain('loan-products:all');
    expect(dataImportNav.menu.requires).toContain('financial-periods:import');
  });
});
