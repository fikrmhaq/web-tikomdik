import create from "zustand"

const useTheme = create((set) => ({
    theme: 'black',
    setTheme: (params) => set(() => ({ theme: params }))
  }))

export default {
    useTheme
}