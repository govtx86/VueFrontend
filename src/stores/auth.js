import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from 'vue3-cookies'
import axiosInstance from '@/services/axios'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref({
    username: "",
    email: "",
  })
  const csrfToken = ref(null)

  async function initialize() {
    console.log("init func")
    const { cookies } = useCookies()
    csrfToken.value = cookies.get("csrf_token")
    try {
      const response = await axiosInstance.get("/user")
      user.value = response.data
      isAuthenticated.value = true
    } catch (error) {
      if (error.response.status == 401) {
        isAuthenticated.value = false
        user.value = {
          username: "",
          email: "",
        }
      }
    }
  }

  async function login(credentials) {
    const response = await axiosInstance.post("/login", credentials)
    initialize()
    return response
  }

  async function logout() {
    const response = await axiosInstance.post("/logout")
    initialize()
    return response
  }

  return { user, isAuthenticated, csrfToken, initialize, login, logout }
})
