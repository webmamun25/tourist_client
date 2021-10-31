import './Service.css';

import React from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';

const Service = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    axios
      .post('https://ghoulish-cat-83697.herokuapp.com/newservice', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert('successfull Addition thank You')
          reset()
        }
      })
  }
  return (
    <div className="serviceform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true, maxLength: 20 })}
          placeholder="Name"
        />

        <textarea {...register('description')} placeholder="Description" />
        <input {...register('imageurl')} placeholder="Choose an image" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Service
