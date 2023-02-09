import React from "react";

const LoginComponent = () => {
    return (
        <>
            <div>
                <div className="text-center">
                    <img src="assets/img/logo.png" alt="" className="img-responsive" />
                </div>

                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs nav-advance theme-bg" role="tablist">
                    <li className="nav-item active">
                        <a className="nav-link" data-toggle="tab" href="#employer" role="tab">
                            <i className="ti-user"></i> Employer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#candidate" role="tab">
                            <i className="ti-user"></i> Candidate</a>
                    </li>
                </ul>
                {/* <!-- Nav tabs --> */}

                {/* <!-- Tab panels --> */}
                <div className="tab-content">

                    {/* <!-- Employer Panel 1--> */}
                    <div className="tab-pane fade in show active" id="employer" role="tabpanel">
                        <form>

                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="*********" />
                            </div>

                            <div className="form-group">
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="4" />
                                    <label htmlFor="4"></label>Remember me
                                </span>
                                <a href="#" title="Forget" className="fl-right">Forgot Password?</a>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn theme-btn full-width btn-m">LogIn </button>
                            </div>

                        </form>

                        <div className="log-option"><span>OR</span></div>

                        <div className="row mrg-bot-20">
                            <div className="col-md-6">
                                <a href="#" title="" className="fb-log-btn log-btn"><i className="fa fa-facebook"></i>Sign
                                    In With Facebook</a>
                            </div>
                            <div className="col-md-6">
                                <a href="#" title="" className="gplus-log-btn log-btn"><i
                                        className="fa fa-google-plus"></i>Sign In With Google+</a>
                            </div>
                        </div>

                    </div>
                    {/* <!--/.Panel 1--> */}

                    {/* <!-- Candidate Panel 2--> */}
                    <div className="tab-pane fade" id="candidate" role="tabpanel">
                        <form>

                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="*********" />
                            </div>

                            <div className="form-group">
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="44" />
                                    <label htmlFor="44"></label>Remember me
                                </span>
                                <a href="#" title="Forget" className="fl-right">Forgot Password?</a>
                            </div>
                            <div className="form-group text-center">
                                <button type="button" className="btn theme-btn full-width btn-m">LogIn </button>
                            </div>

                        </form>

                        <div className="log-option"><span>OR</span></div>

                        <div className="row mrg-bot-20">
                            <div className="col-md-6">
                                <a href="#" title="" className="fb-log-btn log-btn"><i className="fa fa-facebook"></i>Sign
                                    In With Facebook</a>
                            </div>
                            <div className="col-md-6">
                                <a href="#" title="" className="gplus-log-btn log-btn"><i
                                        className="fa fa-google-plus"></i>Sign In With Google+</a>
                            </div>
                        </div>

                    </div>
                    {/* <!--/.Panel 2--> */}

                </div>
                {/* <!-- Tab panels --> */}
            </div>
        </>
    )
}

export default LoginComponent;