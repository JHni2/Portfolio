import { createContext, useContext } from 'react';

type CacheKeysValue = {
  postsKey: string;
};

export const CacheKeysContext = createContext<CacheKeysValue>({
  postsKey: '/api/comments',
});

export const useCachKeys = () => useContext(CacheKeysContext);
