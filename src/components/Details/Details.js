import React from 'react';
import './Details.css';

const Details = ({exerciseTime, getBreakTime, breakTime}) => {
    return (
        <div className='mx-3 position-sticky top-0'>
            <div className='details d-flex '>
                <img src="https://www.summitcl.com/wp-content/uploads/2019/06/female-avator-370x400.png" alt="" />
                <div className='mt-5'>
                    <h6>Iffat Nur Shad</h6>
                    <i class="fa-solid fa-location-dot"></i><span> Chittagong, Bangladesh</span>
                </div>
            </div>
            <div className='d-flex justify-content-around text-center bg-light rounded'>
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
            
            <div className='my-3'>
                <h6>Add a Break</h6>
                <div className='d-flex justify-content-around text-center bg-light rounded p-3'>
                    <button onClick={()=> getBreakTime(10)} className='rounded-circle p-2 btn btn-outline-primary fw-semibold'>10s</button>
                    <button onClick={()=> getBreakTime(20)} className='rounded-circle p-2 btn btn-outline-primary active fw-semibold'>20s</button>
                    <button onClick={()=> getBreakTime(30)} className='rounded-circle p-2 btn btn-outline-primary fw-semibold'>30s</button>
                    <button onClick={()=> getBreakTime(40)} className='rounded-circle p-2 btn btn-outline-primary fw-semibold'>40s</button>
                    <button onClick={()=> getBreakTime(50)} className='rounded-circle p-2 btn btn-outline-primary fw-semibold'>50s</button>
                </div>
            </div>
            <div className='my-3'>
                <h6>Exercise Details</h6>
                <div className='d-flex align-items-center justify-content-between bg-light rounded p-3 my-2'>
                    <p className='fw-semibold'>Exercise Time</p>
                    <span className='text-muted'>{exerciseTime} <span className='text-muted'>seconds</span></span>
                </div>
                <div className='d-flex align-items-center justify-content-between bg-light rounded p-3 my-2'>
                    <p className='fw-semibold'>Break Time</p>
                    <span className='text-muted'>{breakTime} <span className='text-muted'>seconds</span></span>
                </div>
            </div>
            <button className="btn btn-primary w-100">Activity Completed</button>
            
        </div>
    );
};

export default Details;