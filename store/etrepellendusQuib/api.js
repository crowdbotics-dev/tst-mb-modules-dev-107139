import axios from "axios"
import {
  ET_REPELLENDUS_QUIB_USERNAME,
  ET_REPELLENDUS_QUIB_PASSWORD
} from "react-native-dotenv"
const etrepellendusQuib = axios.create({
  baseURL: "https://something.com/api/v1",
  auth: {
    username: ET_REPELLENDUS_QUIB_USERNAME,
    password: ET_REPELLENDUS_QUIB_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function etrepellendusquib_get_eweweew_read(payload) {
  return etrepellendusQuib.get(`/eweweew`, { params: { hello: payload.hello } })
}
export const apiService = { etrepellendusquib_get_eweweew_read }
