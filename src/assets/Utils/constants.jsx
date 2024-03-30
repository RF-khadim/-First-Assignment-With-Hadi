const ImgComp = ({ img }) => {
    return (
        <img className="object-cover w-full h-full" src={img} />
    )
}

const products = [

    {
        id: 1,
        title: " Gray Half Slevees",
        price: 2200,
        dicount: "300 Rupees",
        originalPrice: 2500,
        category: 'men',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/e8/b8/16/e8b81661b6055ba1b14f552c027526d0.jpg" />,
    },

    {
        id: 2,
        title: " Complete Suit",
        price: 4500,
        dicount: "500 Rupees",
        originalPrice: 5000,
        category: 'women',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/b2/60/00/b260005d2437e7cd08c5f08f7133e5b8.jpg" />,
    },

    {
        id: 3,
        title: " Puzzled Hoodie & Trouser",
        price: 9500,
        dicount: "500 Rupees",
        originalPrice: 10000,
        category: 'coupleOutfits',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/f8/10/38/f81038961a34693c0bd751ef389e7bf2.jpg" />,
    },

    {
        id: 4,
        title: "MVCK- Bone Trucker ",
        price: 2000,
        dicount: "500 Rupees",
        originalPrice: 2500,
        category: 'caps',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/c9/73/81/c973813a55480612ce401733db545882.jpg" />,
    },

    {
        id: 5,
        title: "MVCK- Bone Trucker Blue ",
        price: 2000,
        dicount: "500 Rupees",
        originalPrice: 2500,
        category: 'caps',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/75/92/82/75928218080d2f70e47a2711b864d366.jpg" />,
    },


    {
        id: 6,
        title: " SHEIN- Metalic Frame",
        price: 3200,
        dicount: "300 Rupees",
        originalPrice: 3500,
        category: 'googles',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/6b/8c/07/6b8c0728e4b0cd2dce9046a7c27172ba.jpg" />,
    },

    {
        id: 7,
        title: " Beats The Beast",
        price: 9000,
        dicount: "500 Rupees",
        originalPrice: 9500,
        category: 'headphones',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/49/b8/ba/49b8ba90ace75b8165fd8cc53f6876e0.jpg" />,
    },

    {
        id: 8,
        title: "Rena Boots ",
        price: 2000,
        dicount: "500 Rupees",
        originalPrice: 2500,
        category: 'caps',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/d2/59/d4/d259d482c444a1ef2653a318cf85d5e0.jpg" />,
    },

    {
        id: 9,
        title: "MVCK Black & Peach ",
        price: 2000,
        dicount: "500 Rupees",
        originalPrice: 2500,
        category: 'caps',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/e9/b8/29/e9b8297e4147ea614ca6d7b33c1c6fe9.jpg" />,
    },
    {
        id: 10,
        title: "Men Anti-blue Eyeglasses",
        price: 3200,
        dicount: "300 Rupees",
        originalPrice: 3500,
        category: 'googles',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/23/94/8d/23948d05520af71c67137152bcd453d9.jpg" />,
    },

    {
        id: 11,
        title: " Geomatric Frame EyeglassesZ",
        price: 3200,
        dicount: "300 Rupees",
        originalPrice: 3500,
        category: 'googles',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/a9/11/18/a9111874c06b94b75c9de5aac79a1f38.jpg" />,
    },

    {
        id: 12,
        title: " Square Frame Eyeglasses",
        price: 3200,
        dicount: "300 Rupees",
        originalPrice: 3500,
        category: 'googles',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/45/cc/44/45cc448dcf0f9fbca53e4b289fe22dae.jpg" />,
    },

    {
        id: 13,
        title: " Beats The Blood",
        price: 9000,
        dicount: "500 Rupees",
        originalPrice: 9500,
        category: 'headphones',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/236x/c6/f9/5f/c6f95f63af96f8c61bc13982f3249865.jpg" />,
    },

    {
        id: 14,
        title: " Hesh The Black-Skull",
        price: 9000,
        dicount: "500 Rupees",
        originalPrice: 9500,
        category: 'headphones',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/4b/d1/34/4bd13425ef25c4113b890505d714b44b.jpg" />,
    },

    {
        id: 15,
        title: "Hesh Multi-Color Skull",
        price: 9000,
        dicount: "500 Rupees",
        originalPrice: 9500,
        category: 'headphones',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/5b/50/1e/5b501e33adaad424c03ae54db3f9baac.jpg" />,
    },

    {
        id: 16,
        title: " MMVL Shirt & Trouser",
        price: 9500,
        dicount: "500 Rupees",
        originalPrice: 10000,
        category: 'coupleOutfits',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/e5/6e/86/e56e86897b940f56d64eed97aee24120.jpg" />,
    },

    {
        id: 17,
        title: " Double Color Short & Shirt",
        price: 8500,
        dicount: "1000 Rupees",
        originalPrice: 95000,
        category: 'coupleOutfits',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/5c/7e/a0/5c7ea013b5a513f836b925ed811ac767.jpg" />,
    },

    {
        id: 18,
        title: " Atlanata T-Hoodie & Short",
        price: 8500,
        dicount: "1000 Rupees",
        originalPrice: 9500,
        category: 'coupleOutfits',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/ae/21/28/ae21282c323df792f616a14968cf3705.jpg" />,
    },

    {
        id: 19,
        title: " Ready-Made Suit",
        price: 9500,
        dicount: "500 Rupees",
        originalPrice: 10000,
        category: 'women',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/236x/e5/18/7b/e5187bbbe7a6feb11d27a83fe8023287.jpg" />,
    },

    {
        id: 20,
        title: " Complete Suit",
        price: 4500,
        dicount: "500 Rupees",
        originalPrice: 5000,
        category: 'women',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/236x/67/17/14/67171422512642278802d83a3afff6d9.jpg" />,
    },

    {
        id: 21,
        title: " Ready-Made Suit",
        price: 8500,
        dicount: "500 Rupees",
        originalPrice: 9000,
        category: 'women',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/17/30/65/1730651ad02805819929bb3f66b8b33f.jpg" />,
    },

    {
        id: 22,
        title: " Block Pocket Straight Stripped",
        price: 2200,
        dicount: "300 Rupees",
        originalPrice: 2500,
        category: 'men',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/fa/09/5d/fa095d419f380007416192bae9cf1ff8.jpg" />,
    },

    {
        id: 23,
        title: "Gray Khaki DC",
        price: 2200,
        dicount: "300 Rupees",
        originalPrice: 2500,
        category: 'men',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/13/84/9a/13849af21f8c06b41949387eeb3f7728.jpg" />,
    },

    {
        id: 24,
        title: " Black Button-Up",
        price: 2200,
        dicount: "300 Rupees",
        originalPrice: 2500,
        category: 'men',
        quantity: 9,
        image: <ImgComp img="https://i.pinimg.com/564x/b3/3f/4e/b33f4ea6a1e682d5f1144a4a10f9e4c6.jpg" />,
    },


]

export default products;