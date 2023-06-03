import React from 'react';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItem = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='w-full'>
            <ReactHelmet title={'Add Item'} />
            <SectionTitle subHeading={'Whats new'} Heading={'Add an Item'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 mx-auto'> 
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Receipe *</span>
                        </label>
                        <input type="text" placeholder="Item Name" {...register("name", {required: true, maxLength: 120})} className="input input-bordered lg:w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category *</span>
                        </label>
                        <select {...register("category", { required: true })} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price *</span>
                        </label>
                        <input type="number" placeholder="Item Price" {...register("price", {required: true})} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Receipe details *</span>
                        </label>
                        <textarea {...register("recipe", {required: true, maxLength: 200})} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Item image *</span>
                        </label>
                        <input type="file" {...register("image", {required: true})} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <button className="btn btn-warning my-5">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;