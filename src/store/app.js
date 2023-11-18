// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: false,
    isScreenSmall: window.innerWidth <= 650,
    isTabletScreen: window.innerWidth <= 1279
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },

    updateScreenWidth() {
      this.isScreenSmall = window.innerWidth <= 650
      this.isTabletScreen = window.innerWidth <= 1279
    },

    onMounted() {
      window.addEventListener('resize', this.updateScreenWidth)
    },

    onUnmounted() {
      window.removeEventListener('resize', this.updateScreenWidth)
    },

  },
})
