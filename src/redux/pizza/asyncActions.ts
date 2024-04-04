import { createAsyncThunk } from '@reduxjs/toolkit';
import { TPizza } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<TPizza[], Record<string, string>>(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<TPizza[]>(
      `https://65fae2e83909a9a65b1bd70a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
    );
    return data;
  }
);
