import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from 'vue3-cookies'
import axiosInstance from '@/services/axios'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  // const user = ref(null)
  const csrfToken = ref(null)

  function initialize() {
    const { cookies } = useCookies()
    csrfToken.value = cookies.get("csrf_token")
    isAuthenticated.value = (csrfToken.value != null)
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

  return { isAuthenticated, csrfToken, initialize, login, logout }
})
