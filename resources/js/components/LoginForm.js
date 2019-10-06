import React, { Component } from 'react'
import PropTypes from "prop-types"
 


class LoginForm extends Component {


    onClikcEvent(e){
        console.log("test");
    }

    render(){

        const {status} = this.props;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 col-md-6 col-lg-5 col-xl-4 mt-5 pt-4 pb-4 px-4 bg-light rounded">
                        <form>
                            <div className="text-center">
                                <h2 className="my-4">
                                    Giriş
                                </h2>

                                {
                                status ? <h6 className="text-danger">Kullanıcı Adı veya Şifre yanlış!</h6> : null
                                }
                            </div>

                            <div className="form-group mt-4">
                                <label htmlFor="kullaniciAdi">Kullanıcı Adı</label>
                                <input type="text" id="kullaniciAdi" className="form-control" placeholder="Kullanıcı Adı" />
                            </div>

                            <div className="form-group mb-5">
                                <label htmlFor="sifre">Şifre</label>
                                <input type="text" id="sifre" className="form-control" placeholder="Şifre" />
                            </div>

                            <button type="submit" className="btn btn-outline-secondary btn-block">Giriş Yap</button>
                            

                        </form>

                        <button onClick={this.onClikcEvent} type="button" className="btn btn-outline-success mt-2 btn-block">Kayıt Ol</button>

                    </div>
                </div>
            </div>
        )
    }
}
LoginForm.propTypes = {
    status : PropTypes.bool
}
LoginForm.defaultProps = {
    status : false
}

export default LoginForm;