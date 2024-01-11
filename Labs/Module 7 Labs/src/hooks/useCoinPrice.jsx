import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: null,
  price: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: null,
        price: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        price: null,
      };
    default:
      return state;
  }
};

const useCoinPrice = (currency) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );

        if (!ignore) {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: response.data.bitcoin[currency.toLowerCase()],
          });
        }
      } catch (error) {
        if (!ignore) {
          dispatch({
            type: 'FETCH_ERROR',
            payload: error.message,
          });
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [currency]);

  return state;
};

export default useCoinPrice;
