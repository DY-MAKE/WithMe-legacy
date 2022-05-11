import { useEffect } from 'react';

const useEffectOnce = (callback: Function) => {
    useEffect(() => {
        callback();
    }, []);
};

export default useEffectOnce;
