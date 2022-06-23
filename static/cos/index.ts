import {getTmpToken} from "~/api/cos";
import {TENCENT_COS_BUCKET, TENCENT_COS_REGION} from "~/static/config";

const COS = require('cos-js-sdk-v5');


export const getCOSInstance = () => {
  return new COS({
    getAuthorization: function (options: any, callback: any) {
      getTmpToken().then((data: any) => {
        callback({
          TmpSecretId: data.tmpSecretId,
          TmpSecretKey: data.tmpSecretKey,
          XCosSecurityToken: data.sessionToken,
          StartTime: data.startTime,
          ExpiredTime: data.expiredTime,
        });
      })
    }
  })
}

export const sliceUploadFile = (file: any) => getCOSInstance().sliceUploadFile({
  Body: file,
  Bucket: TENCENT_COS_BUCKET,
  Key: Date.now().toString(16) + '_' + file.name,
  Region: TENCENT_COS_REGION,
})



