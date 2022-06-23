import {getItem} from "~/plugins/js-cookie";

export const state = () => ({
  userInfo: getItem('userInfo') || {},
})
export const mutations = {
  setUserInfo(state: any, data: any) {
    state.userInfo = data
  },
}

