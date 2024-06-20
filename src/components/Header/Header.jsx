import React from 'react';
import "./Header.css";
import logo from "../../assets/images/company.png";
import { Layout, Button,Space} from "antd";
 import {LinkedinFilled,FacebookFilled,InstagramFilled} from "@ant-design/icons";
 const { Header} = Layout;

const HeaderC = ({title}) => {
  return (
    <Header  className="header">
    <img src={logo} alt="Logo image" />
   <h1>{title}</h1>
   <Space size={"large"}>
      <Button className='btn' target='_blank'  type="link" href="https://www.linkedin.com/in/davud-%C9%99hm%C9%99dov-922321246/" icon={<LinkedinFilled  style={{color:"blueviolet"}}/>}/>
      <Button className='btn' target='_blank' type="link"  href="https://m.facebook.com/davud.ahmed.12" icon={<FacebookFilled   style={{color:"blueviolet"}}/>}/>
      <Button className='btn' target='_blank' type="link" href="https://www.instagram.com/davud_ahmedoff/" icon={<InstagramFilled style={{color:"blueviolet"}}/> }/>
   </Space>
 </Header>
  )
}

export default HeaderC
