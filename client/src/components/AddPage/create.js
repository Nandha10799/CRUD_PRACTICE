import {React, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './create.css';
import { Link } from 'react-router-dom';
export function Create() {
    const[firstname,setFirstname] = useState('');
    const[lastname,setLastname] = useState('');
    const[email,setEmail] = useState('');
    const[phonenumber,setPhonenumber] = useState('');
    const[city,setCity] = useState('');

    const insertdata = () => {
        let datas = {Firstname:firstname,Lastname:lastname,Email:email,Phonenumber:phonenumber,City:city};
        axios.post("http://localhost:3004/read",datas).then(function(response){
            if(response.data.status === 'inserted'){
                alert('inserted');
                window.location.reload();
            }
        })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 mt-4'>
                        <h3 className='h_style'>CRUD Practice - CREATE</h3>
                    </div>
                </div>
            </div>
            <div className='container w-50 mt-4 p-4 box_border'>
                <form className='content_center'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div class="form-group">
                                <label>First Name:</label>
                                <input type="text" className="form-control form-control-sm" name="FName" id="" placeholder="" onChange={(e) => setFirstname(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div class="form-group">
                                <label for="">Last Name:</label>
                                <input type="text" class="form-control form-control-sm" name="LName" id="" placeholder="" onChange={(e) => setLastname(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div class="form-group">
                                <label for="">E-Mail Id:</label>
                                <input type="text" class="form-control form-control-sm" name="Email" id="" placeholder="" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div class="form-group">
                                        <label for="">Phone Number:</label>
                                        <input type="text" class="form-control form-control-sm w-100" name="mob_num" id="" placeholder="" onChange={(e) => setPhonenumber(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div class="form-group">
                                        <label for="">City:</label>
                                        <input type="text" class="form-control form-control-sm" name="city" id="" placeholder="" onChange={(e) => setCity(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 ml-auto'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <Link to='/'><button name="save_btn" id="" class="btn btn-success w-100" onClick={insertdata}>SAVE</button></Link>
                                </div>
                                <div className='col-lg-6'>
                                    <Link to='/'><button name="cancle_btn" id="" class="btn btn-danger w-100" >CANCLE</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}