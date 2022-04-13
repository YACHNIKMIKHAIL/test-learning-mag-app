import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:9001/items'
})

export const magAPI = {
    getItems() {
        return instance.get<Array<ItemsType>>(`/`)
            .then(res => {
                return res.data
            })
            .catch(err=>{
                console.log(err)
            })
    },
    postItem(item:PostItemType) {
        return instance.post<ItemsType>(`/`,item)
            .then(res => {
                return res.data
            })
            .catch(err=>{
                console.log(err)
            })
    },
    deleteItem(id:string) {
        return instance.delete<ItemsType>(`/${id}` )
            .then(res => {
                debugger
                return res.data
            })
            .catch(err=>{
                console.log(err)
            })
    },
    updateItem(item:ItemsType) {
        return instance.put<ItemsType>(`/`,item )
            .then(res => {
                debugger
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
    __v?: number
}
export type PostItemType = {
    title: string,
    image: string,
    desc: string,
    cost: number,
    amount: number
}