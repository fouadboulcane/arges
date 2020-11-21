import React from 'react';

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination]);

const Slider = () => {



    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="columns pb-6">
                    <div className="column">
                        <div className="a-testimonial pt-6 pb-6 is-flex">
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                            </figure>
                            <div className="ml-4">
                                <h4>MARIE CRAWFORD</h4>
                                <h6 className="title is-size-7 has-text-grey-lighter mt-1">Wall Street Combassy</h6>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam, debitis, explicabo possimus totam hic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="a-testimonial pt-6 pb-6 is-flex">
                            <div className="mr-4 has-text-right">
                                <h4>JERRY ALEXANDER</h4>
                                <h6 className="title is-size-7 has-text-grey-lighter mt-1">Wall Street Combassy</h6>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam, debitis, explicabo possimus totam hic.</p>
                            </div>
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                            </figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="columns pb-6">
                    <div className="column">
                        <div className="a-testimonial pt-6 pb-6 is-flex">
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                            </figure>
                            <div className="ml-4">
                                <h4>MARIE CRAWFORD</h4>
                                <h6 className="title is-size-7 has-text-grey-lighter mt-1">Wall Street Combassy</h6>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam, debitis, explicabo possimus totam hic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="a-testimonial pt-6 pb-6 is-flex">
                            <div className="mr-4 has-text-right">
                                <h4>JERRY ALEXANDER</h4>
                                <h6 className="title is-size-7 has-text-grey-lighter mt-1">Wall Street Combassy</h6>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam, debitis, explicabo possimus totam hic.</p>
                            </div>
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                            </figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="columns pb-6">
                    <div className="column">
                        <div className="a-testimonial pt-6 pb-6 is-flex">
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                            </figure>
                            <div className="ml-4">
                                <h4>MARIE CRAWFORD</h4>
                                <h6 className="title is-size-7 has-text-grey-lighter mt-1">Wall Street Combassy</h6>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam, debitis, explicabo possimus totam hic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="a-testimonial pt-6 pb-6 is-flex">
                            <div className="mr-4 has-text-right">
                                <h4>JERRY ALEXANDER</h4>
                                <h6 className="title is-size-7 has-text-grey-lighter mt-1">Wall Street Combassy</h6>
                                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam, debitis, explicabo possimus totam hic.</p>
                            </div>
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/256x256.png" />
                            </figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
      ...
        </Swiper>
    )
}


export default Slider