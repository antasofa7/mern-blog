import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBG } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';

const Register = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBG} className="bg-image" alt="ImageBG" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Username" placeholder="Username"/>
                <Gap height={18} />
                <Input label="Email" placeholder="Email"/>
                <Gap height={18} />
                <Input label="Password" placeholder="Password"/>
                <Gap height={50} />
                <Button title="Register" onClick={() => history.push('/login')} />
                <Gap height={100} />
                <Link title="Kembali ke Login"onClick={() => history.push('/login')} />
            </div>
        </div>
    )
}

export default Register
