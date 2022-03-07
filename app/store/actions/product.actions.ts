import { AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'react';
import { API } from '../../helpers/consts';
import { getProductsSuccess } from '../slices/product.slice';
import { IProduct } from '../types/product.types';

export const getProducts = () => async (dispatch: Dispatch<AnyAction>) => {
	try {
		const { data } = await axios.get<IProduct[]>(API);
		dispatch(getProductsSuccess(data));
	} catch (e) {
		// dispatch(someError)
		console.log(e);
	}
};
