class AppSettingsService {
  public appSettings: any;

  constructor() {
    this.appSettings = this.getDefaultAppSettings();
  }

  get settings() {
    return this.appSettings;
  }

  public getDefaultAppSettings(): any {
    return {
      themeSettings: {
        darkTheme: {
          label: "Dark Theme",
          value: false,
        },
      },
      layoutSettings: {
        flatStyle: {
          label: "Flat Style",
          value: false,
        },
      },
    };
  }

  public reset() {
    this.appSettings.themeSettings.darkTheme.value = false;
    this.appSettings.layoutSettings.flatStyle.value = false;
  }
}

export const appSettingsService = new AppSettingsService();
