import React from 'react';
import "./SignUp.css";
import { HeaderC,FooterC, Registercontent } from "../../components/export";
import { Layout} from "antd";

const SignUp = () => {

    return (
      <Layout className="layout">
       <HeaderC title={"Register"}/>
     <Registercontent/>
      <FooterC title={"Footer"} bgColor={"blueviolet"} color={"white"}/>
      </Layout>
    );
  
}

export default SignUp
