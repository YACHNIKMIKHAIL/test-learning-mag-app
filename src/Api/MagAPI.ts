import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:9001/items'
    baseURL: 'https://test-server-express.herokuapp.com/items'
})

export const magAPI = {
    getItems() {
        // console.log(window.location.search)
        return instance.get<Array<ItemsType>>(`/${window.location.search}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    searchItems(s:string) {
        // console.log(window.location.search)
        return instance.get(`/?search=${s}`,)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    postItem(item: PostItemType) {
        return instance.post<ItemsType>(`/`, item)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteItem(id: string) {
        return instance.delete<ItemsType>(`/${id}`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    updateItem(item: ItemsType) {
        return instance.put<ItemsType>(`/`, item)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    },
    sendMessage(name:string,city:string,email:string) {
        return instance.post(`/sendMessage`,{name, email, city})
            .then(res => {
                // alert(res)
            })
            .catch(err => {
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