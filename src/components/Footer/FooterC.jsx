import React from 'react';
import "./Footer.css";
import { Layout} from "antd";
const { Footer } = Layout;


const FooterC = ({title,bgColor,color}) => {
  return (
    <Footer className="footer" style={{backgroundColor:bgColor,color:color}}>{title}</Footer>
  )
}

export default FooterC
