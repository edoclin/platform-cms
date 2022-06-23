import Cookies from "js-cookie";


export const getItem = (key) => {
  return Cookies.get(key)
}
