// src/pages/OrderQueue.jsx

import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

export default function OrderQueue() {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-3'>
            <h1>Order Queue for your buiness</h1>
            
            <Link to='/pos' className='btn btn-primary'>back to POS</Link>
        </div>
    </MainLayout>
  )
}
