import React,{ Component, Fragment} from 'react';
import { Helmet } from 'react-helmet';
render () 
{
    return(
        <>
        <Helmet><title>QuizPage</title></Helmet>
        <div className="questions">
            <h1>Google................</h1>
            <div className="options-container">
                <p className="option">2000</p>
                <p className="option">2001</p>
            </div>
            <div className="options-container">
                <p className="option">2002</p>
                <p className="option">2003</p>
            </div>
        </div>
        </>
    );
}
export default play;