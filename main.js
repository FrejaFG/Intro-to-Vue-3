const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Nice time socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 10,
            onSale: false,
            details: ["50% cotton", "30% wool", "20% polyester"]
        }
    }
})
