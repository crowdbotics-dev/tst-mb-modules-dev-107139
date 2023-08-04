import axios from "axios"
import { NEW_PLUGIN_9_TOKEN } from "react-native-dotenv"
const newPlugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7234/storyboard/8337/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${NEW_PLUGIN_9_TOKEN}`
  }
})
export const apiService = {}
