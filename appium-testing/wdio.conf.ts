import { Config } from '@wdio/types';
import path from 'path';

const appPath = path.resolve(new URL(import.meta.url).pathname, '../../Metro5.apk'); // Use import.meta.url to get the path

export const config: Config = {
  runner: 'local',
  specs: ['./specs/performanceTest.spec.ts'], // or .js if you're using JS
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'RFCT420A3YE', // Your device name with the appium: prefix
    'appium:platformVersion': '14.0', // Android version with the appium: prefix
    'appium:automationName': 'UiAutomator2', // Automation name with the appium: prefix
    'appium:app': '/home/abhi_q3a7r8/MetroConnect5/appium-testing/Metro5.apk', // Path to the APK
    'appium:autoGrantPermissions': true, // Grant permissions automatically with the appium: prefix
    'appium:appWaitActivity': '*.*', // Wait for any activity with the appium: prefix
    'appium:noReset': true,
    'appium:fullReset': false
  }],
  logLevel: 'info',
  framework: 'mocha',
  services: ['appium'],
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
