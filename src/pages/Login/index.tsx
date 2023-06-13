import React, { useEffect, useRef, useState } from 'react';
import styles from "./index.module.scss"
import initLoginBg from "./init.ts"
import './login.less'
import { Button, Form, Input, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
const Login = () => {
    const ref = useRef(null)
    const [captchaImg,setCaptchaImg] = useState(""); 
    useEffect(() => {
        initLoginBg();
        window.onreset = function () {
            initLoginBg()
        }
    }, [])
    
    const onsubmit = () => {
        const o = ref.current;
        console.log(o)
    }
    return (
        <div className={styles.loginPage}>
            <canvas id='canvas' style={{display:"block"}}></canvas>
            <div className={styles.loginBox+ " loginbox"}>
                <div className={styles.title}>

                </div>
                <div className="form">
                    <Form ref={ref}>
                    <Space direction='vertical' size="large" style={{display:'flex'}}>
                        <Input placeholder='username'></Input>
                        <Input.Password placeholder='password'></Input.Password>
                        <div className="captchaBox">
                            <Input placeholder='验证码' />
                            <div className="captchaImg">
                                <img height="38" src={captchaImg} alt=""/>
                            </div>
                        </div>
                        <Button type='primary' className="loginBtn" block onChange={()=>onsubmit()}>submit</Button>
                    </Space>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;