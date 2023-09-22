import React from "react";
// import jpg from '../39269341.jpg';
 import about from '../images/about.jpg'
const About = () => {
    return (
        <div style={{marginTop:"50px", marginLeft:'20px',marginRight:'20px',display:'flex',gap:'50px'}}>
            <div style={{width:"50%"}}>
                <img src={about} ></img>
            </div>
            <div style={{width:"50%"}} >
            <h1 style={{textAlign:'left', fontSize:"24px", fontWeight:'bold'}}>
            Everest-Shopping center
            </h1>
            <p style={{textAlign:'left'}}>An online shopping center website, often referred to as an e-commerce website or online marketplace, is a virtual platform that allows users to browse, search for, and purchase a wide range of products and services over the internet. These websites have become increasingly popular in recent years, providing consumers with a convenient and efficient way to shop from the comfort of their homes or on the go</p><br></br>
         <br></br>
            </div>
               {/* <img src={jpg} alt="jgp" /> */}
            </div>
    );
};
 
export default About;