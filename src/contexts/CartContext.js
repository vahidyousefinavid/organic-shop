


import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext({
    cartData: [],
    addProduct: (tedad, product) => { },
    count: 0,
    RemoveItem: (id) => { },
    totalPrice: () => { },
    totalWtakhfif: () => { },
    Basket: {},
    isExist: (id) => { },
    plus: (id) => { },
    reduce: (id) => { },
    search: {},
    searching: (product) => { },
    filteringS: (category) => { },
    filterS: {}
})
export { CartContext }

export default function CartContextProvider({ children }) {
    const [data, setData] = useState(localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [])
    const gg = []

    const addProduct = async (product, tedad) => {
        product.tedad = tedad


        if (tedad >= 1) {
            setData([...data, product])
            localStorage.setItem('cartData', JSON.stringify([...data, product]))
        } else {
            alert('دوباره امتحان کنید')
        }
    }
    const isExist = (id) => {
        let county = 0
        data.map((pro) => {
            if (pro._id === id) {
                county = parseFloat(pro.tedad)
            }
        })
        return county <= 0 ? false : county
    }

    const plus = async (id) => {

        const pro = data.find((pro) => pro._id === id)
        const newData = parseFloat(pro.tedad) + 1
        pro.tedad = await newData



        if (pro.tedad <= pro.stock) {
            await setData([...data])
            localStorage.setItem('cartData', JSON.stringify([...data]))
            return newData
        } else {
            alert('بیشتر از این در فروشگاه موجود نیست')
        }

    }
    const reduce = async (id) => {

        const pro = data.find((pro) => pro._id === id)
        const newData = parseFloat(pro.tedad) - 1
        pro.tedad = await newData



        if (pro.tedad) {
            await setData([...data])
            localStorage.setItem('cartData', JSON.stringify([...data]))
            return newData
        } if (pro.tedad = 1) {
            let newData =
                data.filter((product) => {
                    if (product._id === pro._id) {
                        return false
                    } else {
                        return true
                    }
                })

            localStorage.setItem('cartData', JSON.stringify(newData))

            setData(newData)



        }

        else {
            alert('مشکلی پیش اومده است ')
        }

    }


    const RemoveItem = (id) => {


        let newData =
            data.filter((product) => {
                if (product._id === id) {
                    return false
                } else {
                    return true
                }
            })










        localStorage.setItem('cartData', JSON.stringify(newData))

        setData(newData)





    }

    const totalPrice = (cartData) => {
        var Data = data,
            sum = 0


        Data.forEach(function (product) {
            let PP = parseFloat(product.takhfif ? product.takhfif * product.tedad : product.price * product.tedad)

            sum += PP

        })
        return (sum)

    }
    const [chooseOText, setChooseOText] = useState(localStorage.OText?localStorage.OText:'0')
    const OText = () => {
        if (chooseOText == '0') {
            return { type: 'ارسال عادی', price: 0, time: `${Intl.NumberFormat('ar-EG').format(15)} دقیقه تا یک ساعت` }
        }
        if (chooseOText == '1') {
            return { type: 'ارسال سریع', price: 3000, time: `${Intl.NumberFormat('ar-EG').format(15)} دقیقه تا ${Intl.NumberFormat('ar-EG').format(30)} دقیقه` }
        }
        if (chooseOText == '2') {
            return { type: 'ارسال ویژه', price: 5000, time: `${Intl.NumberFormat('ar-EG').format(10)} دقیقه تا ${Intl.NumberFormat('ar-EG').format(15)} دقیقه` }
        } else {
            return { type: ' انتخاب کنید', price: 0, time: 'انتخاب کنید' }
        }
    }
    const totalWtakhfif = (textInput) => {

        var Data = data,
            sum = 0


        Data.forEach(function (product) {
            let PP = parseFloat(product.takhfif ? product.takhfif * product.tedad : product.price * product.tedad)

            sum += PP

        })

        var takhfif = sum * 10 / 100
        if (textInput === 'BALAMALA23') {
            return (sum - takhfif)
        } if (textInput === 'AGHAYEJADID') {
            return (sum - takhfif)
        } if (textInput === 'HAMSHAHRI1') {
            return (sum - takhfif)
        }
        else {
            return (0)
        }

    }
    const searching = async (product) => {

        setSearch(product)
        localStorage.setItem('search', product)

    }
    const [search, setSearch] = useState(localStorage.getItem('search') ? localStorage.getItem('search') : null)



    const [filterS, setFilterS] = useState('all')
    const filteringS = async (category) => {

        setFilterS(category)


    }

    const Basket = data.forEach(function (product) {
        gg.push({ 'id': product._id, 'tedad': product.tedad, 'stock': product.stock, 'title': product.title, 'idShop': product.idShop ? product.idShop : 'balamala' })

    })







    return (
        <CartContext.Provider value={{
            cartData: data, count: data.length,
            addProduct: addProduct, RemoveItem: RemoveItem,
            totalPrice: totalPrice, Basket: gg, isExist: isExist,
            plus: plus, reduce: reduce, totalWtakhfif: totalWtakhfif,
            searching: searching, search: search,
            filteringS: filteringS, filterS: filterS,
            chooseOText: chooseOText, OText: OText, setChooseOText: setChooseOText
        }}>
            {children}
        </CartContext.Provider>
    )
}
