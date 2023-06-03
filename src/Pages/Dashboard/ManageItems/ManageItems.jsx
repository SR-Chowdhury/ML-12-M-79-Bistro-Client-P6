import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import Swal from 'sweetalert2';

const ManageItems = () => {

    const [menu, loading, refetch] = useMenu();
 
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/menu/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // if (data.deletedCount > 0) {
                        //     refetch();
                        //     Swal.fire(
                        //         'Deleted!',
                        //         'Your file has been deleted.',
                        //         'success'
                        //     )
                        // }
                        console.log(data);
                    })
                    .catch(err => console.log(err.message))
            }
        })

    }
    return (
        <div className='w-full'>
            <ReactHelmet title={'Manage Items'}/>
            <SectionTitle subHeading={'Hurry Up'} Heading={'Manage Items'}/>
            <div className='bg-base-100 px-10'>
                <div className="flex justify-between font-bold uppercase mb-5">
                    <h1>Total Items: ${menu.length}</h1>
                </div>
                <div className=''>
                    <div className=" w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    menu.map((item, index) =>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <th>
                                                <button className="btn btn-ghost text-green-400 btn-xs">Edit</button>
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-500 btn-xs">Delete</button>
                                            </th>
                                        </tr>

                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageItems;