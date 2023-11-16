// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: true,
    isScreenSmall: window.innerWidth <= 650
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },

    updateScreenWidth() {
      this.isScreenSmall = window.innerWidth <= 650
    },

    onMounted() {
      window.addEventListener('resize', this.updateScreenWidth)
    },

    onUnmounted() {
      window.removeEventListener('resize', this.updateScreenWidth)
    },

  },
})
