import React, { Component } from 'react';

import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            loginError : false
        }
    }
    

    render() {
        return (
            <div className="row">
                
                <div className="col-md-4 p-5" style={{border:"1px #ddd solid"}}>
                    <div className="container text-center">
                        <img className="my-5" src={require('../img/logo.png')} style={{height:"70px"}}/>
                        <h4 style={{fontSize:"1.24rem",color:"#6c757d"}}>YÖNETİM PANELİ GİRİŞ EKRANI</h4>

                        <form className="mx-4 mt-5">
                            <input className="form-control input-underline" type="text" placeholder="Kullanıcı Adını Yazınız"/>
                            <input className="form-control input-underline mt-3" type="text" placeholder="******"/>
                            
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <div className="custom-control custom-checkbox text-left">
                                        <input type="checkbox" className="custom-control-input" id="cbBeniHatirla" />
                                        <label className="custom-control-label" htmlFor="cbBeniHatirla">Beni Hatırla</label>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <a href="#" style={{color:"#212529"}}>Şifremi Unuttum</a>
                                </div>

                            </div>
                            
                            <button className="btn btn-outline-dark btn-sm btn-block mt-4" type="submit">Giriş</button>
                        </form>

                        <div style={{marginTop:"140px"}}>
                            <img id="logoText" className="mr-2" src={require('../img/logoYazi.png')} style={{verticalAlign:"text-bottom"}} />
                            <label htmlFor="logoText"> V 1.1</label>
                        </div>    

                    </div>
                </div>


                <div className="col-md-8" style={{border:"1px #ddd solid"}}>
                    <div className="row pt-3" style={{height:"60px"}}>
                        <div className="col-6">
                            <a href="#" className="font-weight-bold" style={{color:"#212529"}}>Yeni Gelen Güncellemeler</a>
                        </div>
                        
                        <div className="col-6 pull-right text-right pr-5">
                            <label className="">Galeri Modülü Eklendi.</label>
                        </div>
                        
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                                
                                <ol className="carousel-indicators custom-carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                </ol>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={require('../img/arkaPlan.png')} alt="First slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={require('../img/arkaPlan-2.png')} alt="Second slide"/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>

            </div>
        );
    }
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}