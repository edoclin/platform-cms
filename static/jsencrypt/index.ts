import {getPublicKey} from "~/api/user";

export const encrypt = async (data: any) => {
  const JSEncrypt = (await import('jsencrypt')).default;
  const jsencrypt = new JSEncrypt();
  let publicKey = await getPublicKey()
  if (typeof publicKey === "string") {
    jsencrypt.setPublicKey(publicKey)
    return jsencrypt.encrypt(data)
  }
}
