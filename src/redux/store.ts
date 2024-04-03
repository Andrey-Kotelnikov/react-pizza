import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filter from './slices/filterSlice';
import cart from './slices/cartSlise';
import pizzas from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
