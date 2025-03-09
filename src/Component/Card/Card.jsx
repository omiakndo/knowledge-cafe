import React from 'react';
import './Card.css'
const Card = () => {
    return (
        <div>
            <div>
                <img className='img-card' src="/images/2.png" alt="" />
                <div>

                    <div className='full-pr'>
                        <div className='pr'>
                            <img className='img' src="/images/boy1.png" alt="" />
                            <div>
                                <h1 className='name'>Mr. Raju</h1>
                                <p className='active'>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div>
                            <p className='time'> 05 min read</p>
                        </div>
                    </div>

                    <h1 className='dis'>How to get your first job as a <br /> self-taught programmer</h1>
                    <hr className='hr-pr' />
                </div>



            </div>
            <div>
                <img className='img-card' src="/images/1.jpg" alt="" />
                <div>

                    <div className='full-pr'>
                        <div className='pr'>
                            <img className='img' src="/images/boy2.png" alt="" />
                            <div>
                                <h1 className='name'>Mrs. Setara</h1>
                                <p className='active'>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div>
                            <p className='time'> 07 min read</p>
                        </div>
                    </div>

                    <h1 className='dis'>How to get your first job as a <br /> self-taught programmer</h1>
                    <hr className='hr-pr' />
                </div>
            </div>
            <div>
                <img className='img-card' src="/images/3.png" alt="" />
                <div>

                    <div className='full-pr'>
                        <div className='pr'>
                            <img className='img' src="/images/girl2.jpg" alt="" />
                            <div>
                                <h1 className='name'>Mina Mostofa</h1>
                                <p className='active'>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div>
                            <p className='time'> 10 min read</p>
                        </div>
                    </div>

                    <h1 className='dis'>How to get your first job as a <br /> self-taught programmer</h1>
                    <hr className='hr-pr' />
                </div>
            </div>
            <div>
                <img className='img-card' src="/images/4.jpg" alt="" />
                <div>

                    <div className='full-pr'>
                        <div className='pr'>
                            <img className='img' src="/images/girl1.jpg" alt="" />
                            <div>
                                <h1 className='name'>Mr. Raju</h1>
                                <p className='active'>Mar 14 (4 Days ago)</p>
                            </div>
                        </div>
                        <div>
                            <p className='time'> 15 min read</p>
                        </div>
                    </div>

                    <h1 className='dis'>How to get your first job as a <br /> self-taught programmer</h1>
                    <hr className='hr-pr' />
                </div>
            </div>

        </div>
    );
};

export default Card;