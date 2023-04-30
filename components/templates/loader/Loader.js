import LoadingComponent from '@/loaders/LoadingComponent'
import React from 'react'

function Loader() {
  return (
    <div className="content-page">
        <div className="container px-2">
            <div className="form-b h-96 flex justify-center items-center">
                <LoadingComponent /> 
            </div>
        </div>
    </div>
  )
}

export default Loader