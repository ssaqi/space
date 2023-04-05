import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashItems from './DashItems';
import './Dashboard.css';
export default function DashBoardScreen() {
    return (
        <>
            <div className="container my-1 ">
                <div className="row">
                    <h1
                        className="display-2 fw-bold text-dark text-loweruppercase"
                        style={{ fontSize: 25 }}
                    >
                        Features Pakages
                        <br />
                        <span style={{ fontSize: "14px", color: "grey", fontWeight: "lighter" }}>Enter the information to access all features</span>
                    </h1>

                    <div className='container'>
                        <div className="mb-2 ff" >
                            <input
                                type="email"
                                className="form-control"
                                id="form"
                                placeholder="Search Here"
                               
                            />
                            <Button variant="outlined" startIcon={<DashboardIcon />}
                                className="btn text-white"
                                style={{ backgroundColor: "#55acee", border: "none" }}
                            >
                              Add Filter
                            </Button>
                        </div>


                    </div>


                    <DashItems />

                </div>
            </div>

        </>
    )
}
