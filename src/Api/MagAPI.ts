import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:9001/items'
})

export const magAPI = {
    getItems() {
        return instance.get<Array<ItemsType>>(`/`)
            .then(res => {
                debugger
                console.log('magAPI')
                return res.data
            })
            .catch(err=>{
                console.log(err)
            })
    },

}
export type ItemsType = {
    _id: string
    title: string
    image: string
    desc: string
    cost: number
    amount: number
    __v: number
}