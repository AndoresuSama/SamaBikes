import { useCallback, useMemo, useReducer } from 'react';
import { CartContext } from './CartContext';

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product } = action;
      const current = state[product.id];

      return {
        ...state,
        [product.id]: {
          product,
          quantity: (current?.quantity ?? 0) + 1,
        },
      };
    }
    case 'REMOVE': {
      const { productId } = action;
      const current = state[productId];

      if (!current) {
        return state;
      }

      if (current.quantity <= 1) {
        const nextState = { ...state };
        delete nextState[productId];
        return nextState;
      }

      return {
        ...state,
        [productId]: {
          ...current,
          quantity: current.quantity - 1,
        },
      };
    }
    case 'SET_QUANTITY': {
      const { productId, quantity, product } = action;

      if (quantity <= 0) {
        const nextState = { ...state };
        delete nextState[productId];
        return nextState;
      }

      const current = state[productId];

      return {
        ...state,
        [productId]: {
          product: product ?? current?.product,
          quantity,
        },
      };
    }
    case 'CLEAR':
      return {};
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [itemsById, dispatch] = useReducer(cartReducer, {});

  const items = useMemo(() => Object.values(itemsById), [itemsById]);

  const totalCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const addToCart = useCallback((product) => {
    dispatch({ type: 'ADD', product });
  }, []);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'REMOVE', productId });
  }, []);

  const setQuantity = useCallback((productId, quantity, product) => {
    dispatch({ type: 'SET_QUANTITY', productId, quantity, product });
  }, []);

  const getQuantity = useCallback(
    (productId) => itemsById[productId]?.quantity ?? 0,
    [itemsById],
  );

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const value = useMemo(
    () => ({
      items,
      itemsById,
      totalCount,
      addToCart,
      removeFromCart,
      setQuantity,
      getQuantity,
      clearCart,
    }),
    [items, itemsById, totalCount, addToCart, removeFromCart, setQuantity, getQuantity, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
