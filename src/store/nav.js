import {defineStore} from 'pinia'

export const useNavStore = defineStore('nav',{
    state:() => {
        return {
            nav: []
        }
    },
    actions: {
        setNav(data) {
            this.nav = data
        }
    }
})