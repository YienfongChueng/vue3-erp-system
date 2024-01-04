import {defineStore} from 'pinia'

export const usePermissionStore = defineStore('permission',{
    state: ()=>({
        uid: ''
    }),
    actions: {
        setUid(uid) {
            this.uid = uid
        }
    }
})
