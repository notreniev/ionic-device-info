import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

declare let device: any

interface deviceInterface {
  uuid?: string,
  model?: string,
  cordova?: string,
  platform?: string,
  version?: string,
  manufacturer?: string,
  serial?: string,
  isVirtual?: boolean,

};

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public deviceInfo: deviceInterface = {};

  constructor(private platform: Platform) {
    this.platform.ready()
      .then(
        res => {
          this.deviceInfo.uuid = device.uuid
          this.deviceInfo.model = device.model
          this.deviceInfo.cordova = device.cordova
          this.deviceInfo.platform = device.platform
          this.deviceInfo.version = device.version
          this.deviceInfo.manufacturer = device.manufacturer
          this.deviceInfo.serial = device.serial
          this.deviceInfo.isVirtual = device.isVirtual
        }
      ).catch(err => {
        console.clear()
        console.error('Only works on a Android device!')
      })
  }
}
