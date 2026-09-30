const model = {
    app: document.getElementById('app'),
    viewState: {
        cakeordering:{
            smak: '',
            størrelse: '',
            pynt: '',
            tema: '',
            kommentar: '',
        },

        user:{
            username: '',
            password: '',
        },

        cart:{
            products:[],
            coupon: false,
            date: null,
            time: null,

        },
        cartitem: {
            itemname: null,
            itemimg: null,
            qty: 0,
            itemprice: null,
            custom: [],
        }
    },

    data: {
        categories: ['kake','snitter','kaffe','baguette'],
        cakeedits: {
            taste:[],
            size:[],
            theme: [],
            decor: [],
        },
        cafeproducts:[{
            img: '',
            title: '',
            category: 'baguette',
            price: '',
            allergies: [],
            ingredients: [],
            qty: 0,
            lastUpdated: null,
        },],
    orders: [
        {
            orderstatus:null,
            ordernumber: null,
            customername: null,
            order: {},
            payment: null,
            orderid:null,
        }
    ],
    users:[
        {
            id: 0,
            type: 'admin',
            username: 'becka',
            password: 'blabla',
        }
    ]
    },
}
