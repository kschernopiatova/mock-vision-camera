// vision-camera.e2e.js

import React from 'react';
import RNFS, {writeFile} from 'react-native-fs';

console.log('[DETOX] Using mocked react-native-vision-camera');

export class VisionCamera extends React.PureComponent {
  static getAvailableCameraDevices() {
    return [
      {
        position: 'back',
      },
    ];
  }

  static async getCameraPermissionStatus() {
    return 'granted';
  }

  static async requestCameraPermission() {
    return 'granted';
  }

  async takePhoto() {
    console.log('[DETOX] taking photo from mock module');
    const writePath = `${RNFS.DocumentDirectoryPath}/simulated_camera_photo.txt`;

    const imageDataBase64 = 'some_large_base_64_encoded_simulated_camera_photo';
    await writeFile(writePath, imageDataBase64, 'base64');
    console.log(`${RNFS.DocumentDirectoryPath}`);
    console.log('[DETOX] file written');

    return {path: writePath};
  }

  render() {
    return null;
  }
}
