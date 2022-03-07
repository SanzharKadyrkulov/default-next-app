import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, IProductState } from '../types/product.types';

const initialState: IProductState = {
	products: [],
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		getProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
		},
	},
});

export const productReducer = productSlice.reducer;
export const { getProductsSuccess } = productSlice.actions;
