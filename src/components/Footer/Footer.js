import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()  
    return (
    <footer>
        <div className="container-fluid">
            <div className="row bg-dark">
                <div className="col"></div>
                <p className='text-center text-white mb-0 p-2'>&copy;{year} All right reserved</p>
            </div>
        </div>
    </footer>
  )
}
