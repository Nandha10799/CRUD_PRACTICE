import { React,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import '../AddPage/create.css';
import './read.css';
export function Read(){
    const [userdata,setUserdata] = useState([]);

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async() => {
        const response = await axios.get("http://localhost:3004/");
        setUserdata(response.data);
    }

    const deleteUsers = async(id) => {
        await axios.delete('http://localhost:3004/delete/'+id);
        getUser();
    }
    return(
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="h_style">CRUD APPLICATION - READ</h3>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-12 text-right">
                        <Link to={'/create'}><button className="btn btn-success">Add User</button></Link>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <table className='table table-bordered table-hover w-100'>
                            <thead className="text-center">
                                <tr>
                                    <th>S.No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>E-Mail ID</th>
                                    <th>Phone Number</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userdata.map((details,index) => (
                                    <tr key = {details.id}>
                                        <td>{details.id}</td>
                                        <td>{details.firstname}</td>
                                        <td>{details.lastname}</td>
                                        <td>{details.email}</td>
                                        <td>{details.phonenumber}</td>
                                        <td>{details.city}</td>
                                        <td>
                                            <div className="row p-2">
                                                <Link to={'/update/'+details.id}><button className="btn btn-warning mr-1">Update</button></Link>
                                                <button className="btn btn-danger" onClick={() => deleteUsers(details.id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}