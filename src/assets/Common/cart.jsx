import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increaseQuantity, decreaseQuantity} from '../store/cartslice';
import Navbar from './Navbar';

const Cart = () => {
    const dispatch = useDispatch();

    const handleRemove = (itemId) => {
        dispatch(remove(itemId));
    };

    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };

    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };

    const cart = useSelector(state => state.cart);

    return (
        <div className='w-full h-screen bg-white'>
            <div className='pt-32 md:px-10 sm:px-8 lg:px-16 px-6'>
                <Navbar />
                {cart.items.map(item => ( 
                    <div key={item.id} className="w-full mt-6">
                        <div className="lg:h-32 w-full flex justify-between items-center lg:px-32 md:px-16 sm:px-6 py-6 text-center bg-slate-900 text-white md:text-xl lg:text-2xl font-semibold lg:font-bold md:font-semibold rounded-lg text-lg px-4">
                            <div className="w-18 h-24 bg-white px-5">{item.image}</div>
                            <h1>{item.title}</h1>
                            <p>{item.price}</p>
                            <div className='flex justify-around lg:w-20 w-16'>
                                <button onClick={() => handleDecreaseQuantity(item.id)} className='lg:w-8 lg:h-8 h-6 w-6 text-white hover:ring-white font-extrabold flex items-center justify-center transition-all duration-300 hover:scale-150 text-3xl'>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => handleIncreaseQuantity(item.id)} className='lg:w-8 lg:h-8 h-6 w-6 text-white hover:ring-white font-extrabold flex items-center justify-center transition-all duration-300 hover:scale-150'>+</button>
                            </div>
                            <button onClick={() => handleRemove(item.id)} className='py-1 px-4 rounded-md font-medium text-lg bg-white text-black hover:bg-slate-600 ring-white hover:ring-1 hover:text-white transition-all duration-300'>Remove</button>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Cart;