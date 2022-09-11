import { React,useState,useEffect } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export function Update(){
    const {id} = useParams();
    const [firstname ,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [city,setCity] = useState('');

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async() => {
        console.warn(id);
        var response = await fetch("http://localhost:3004/getcrud/"+id);
        response = await response.json();
        setFirstname(response[0].firstname);
        setLastname(response[0].lastname);
        setEmail(response[0].email);
        setPhonenumber(response[0].phonenumber);
        setCity(response[0].city);
    }

    const insertdata = () => {
        let datas = {Id:id,Firstname:firstname,Lastname:lastname,Email:email,Phonenumber:phonenumber,City:city};
        axios.post("http://localhost:3004/update",datas).then(function(response){
            if(response.data.status === 'Updated'){
                alert('Updated');
                window.location.href='/';
            }
        })
    }


    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 mt-4'>
                        <h3 className='h_style'>CRUD Practice - UPDATE</h3>
                    </div>
                </div>
            </div>
            <div className='container w-50 mt-4 p-4 box_border'>
                <form className='content_center'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div class="form-group">
                                <label>First Name:</label>
                                <input type="text" className="form-control form-control-sm" value={firstname} name="FName" id="" placeholder="" onChange={(e) => setFirstname(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div class="form-group">
                                <label for="">Last Name:</label>
                                <input type="text" class="form-control form-control-sm" name="LName" value={lastname} id="" placeholder="" onChange={(e) => setLastname(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div class="form-group">
                                <label for="">E-Mail Id:</label>
                                <input type="text" class="form-control form-control-sm" name="Email" value={email} id="" placeholder="" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div class="form-group">
                                        <label for="">Phone Number:</label>
                                        <input type="text" class="form-control form-control-sm w-100" name="mob_num" value={phonenumber} id="" placeholder="" onChange={(e) => setPhonenumber(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div class="form-group">
                                        <label for="">City:</label>
                                        <input type="text" class="form-control form-control-sm" name="city" id="" value={city} placeholder="" onChange={(e) => setCity(e.target.value)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 ml-auto'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <Link to='/'><button name="update_btn" id="" class="btn btn-success w-100" onClick={insertdata}>Update</button></Link>
                                </div>
                                <div className='col-lg-6'>
                                    <button name="cancle_btn" id="" class="btn btn-danger w-100" >CANCLE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}