import React from 'react'
import LoginButton from 'C:/DevWork/ElleHacks24/thehappyhack/src/components/LoginButton';
import LogoutButton from 'C:/DevWork/ElleHacks24/thehappyhack/src/components/LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'C:/DevWork/ElleHacks24/thehappyhack/src/styles/App.scss';
import logo from 'C:/DevWork/ElleHacks24/thehappyhack/src/logo.svg';

function SignUpPage() {
    return(
        <div className='body'>
            
            <div class="container text-center">
                <div class="row">
                    <div class="mt-5">
                    </div>
                </div>
                <div class="row">
                    <div class="ms-5"></div>
                    <div class="col"><h1>Welcome to</h1></div>
                    <div class="m-auto"></div>
                    <div class="col"><h1>theHappyHack</h1></div>
                </div>
                <div class="row">
                    <div class="mt-2">
                    </div>
                </div>
                <div class="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                            <p class="card-text">Seasonal affective disorder (SAD) is a form of depression that occurs with certain seasons of the year, its peak during the months of January and February. There are many symptoms of SAD, including but not limited to sleep problems, irritability, and agitation. Those feeling the effects of SAD typically do not feel at ease in their day-to-day life. The main cause of SAD is reduced exposure to sunlight due to shorter and darker days, and one of the main concerns with SAD is individuals withdrawing from others. theHappyHacks mission is to ensure those struggling with SAD, are able keep in touch with those they care about, and access resources about how they can deal and cope with it. BLAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH,HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHALB</p>
                            <LoginButton/>
                            <LogoutButton/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">From: Maria</h5>
                                <p class="card-text">;)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">From: Rachel</h5>
                                <p class="card-text">We should catch up sometime!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">From: Ariel</h5>
                                <p class="card-text">Hope you are doing well today :) </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;