import React from 'react';

const Home = () => {
    return(
        <div style={{ marginTop: '-7em'}}>
        <section className="bg_gradient" style={{ height:"100vh" }} id="home">
            <div className="home_table_cell">
                <div className="home_table_cell_center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="text-center mx-auto home_text_business">
                                    <h5 className="home-top-title text-white mb-3">Get More Done with Less Effort</h5>
                                    <div className="home_small_title_border mt-4 mx-auto"></div>
                                    <h1 className="home_title text-white text-capitalize mt-4 mb-0">Meet WhatTodo – the powerful to-do and task list WebApp.</h1>
                                    <div className="home_text_details">
                                        <p className="home_subtitle mx-auto mt-4 mb-0 pb-2">
                                            WhatTodo keeps you in control of everything you 
                                            need to – well – do! Todo makes it easy for you to enter and track to-dos and gives you the ability 
                                            to visualize and prioritize what you need to get done. 
                                            Getting your work in line and in order has never been easier.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-center  mb-0" style={{ color: 'rgba(241, 238, 241, 1)'}}>
                                            <i className="mdi mdi-whatsapp"></i> +1 (209)-784-0351
                                        </span>
                                   </div>
                                    <div className="home_btn_manage mt-4 pt-2">
                                        <a href="/signup" className="btn btn_outline_custom btn-rounded">Get started<i className="mdi mdi-arrow-right ml-2"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Home;