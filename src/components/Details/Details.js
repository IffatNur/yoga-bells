import React from 'react';
import './Details.css';

const Details = () => {
    return (
        <div>
            <div className='details d-flex '>
                <img src="https://www.summitcl.com/wp-content/uploads/2019/06/female-avator-370x400.png" alt="" />
                <div className='mt-5'>
                    <h6>Iffat Nur Shad</h6>
                    <i class="fa-solid fa-location-dot"></i><span> Chittagong, Bangladesh</span>
                </div>
            </div>
            <div className='d-flex text-center mx-5 bg-light'>
                <div className='other m-2'>
                    <h3>75kg</h3>
                    <p>Weight</p>
                </div>
                <div className='other m-2'>
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div className='other m-2'>
                    <h3>25yrs</h3>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Details;