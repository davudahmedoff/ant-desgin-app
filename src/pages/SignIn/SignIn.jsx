import React from "react";
import { ContentC, HeaderC,FooterC } from "../../components/export";
import "./SignIn.css";
import { Layout} from "antd";


const SignIn = () => {
 

  return (
    <Layout className="layout">
     <HeaderC title={"Login"}/>
    <ContentC/>
    <FooterC title={"Footer"} bgColor={"blueviolet"} color={"white"}/>
    </Layout>
  );
};

export default SignIn;
