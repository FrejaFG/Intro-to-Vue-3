const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'Nice time socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/',
            inventory: 9,
            inStock: true,
            onSale: false,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                { id: 2234, color: "green", image: "./assets/images/socks_green.jpg"},
                { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg"},
            ],
            sizes: ["XS", "S", "M", "L", "XL"]
            
        }
    },
    methods: {
        addToCart()
        {
            this.cart += 1
        },
        updateImage(variantImage)
        {
            this.image = variantImage
        },
        removeFromCart()
        {
            this.cart -= 1
        }
    }
})
