import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     });
        //     return res.json();
        // },
        
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            console.log('res from axios: ', res);
            return res.data;
        },
    })

    return [cart, refetch, isLoading ];
};

export default useCart;