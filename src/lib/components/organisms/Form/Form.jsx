import React, { useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { auth } from '../../../services/AuthApi';
import { TYPE_USER_CLIENT } from '../../../constants/user';
import './Form.scss';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [displayMessageError, setDisplayMessageError] = useState(false);

    const handleAuth = (url, data) => {
        auth(url, data).then((result) => {
            if (result === 200 || result === 201) {
                window.location.href = '/';
            } else {
                setDisplayMessageError(true);
            }
        });
    };

    return (
        <div className="form-content-div">
            <div className="form-input-div">
                <Input
                    type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    type="password"
                    value={password}
                    placeholder="Senha"
                    onChange={(event) => setPassword(event.target.value)}
                />
                {!isLogin && (
                    <Input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirmar senha"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                )}
                {displayMessageError && (
                    <span className="login-failed-span">{isLogin ? 'Opa, falha de login' : 'Alguma coisa deu errado'}</span>
                )}
            </div>
            <div className="form-button-div">
                {isLogin ? (
                    <>
                        <Button
                            className="text-button"
                            onClick={() => {
                                setIsLogin(false);
                                setDisplayMessageError(false);
                            }}
                        >
                            Registrar
                        </Button>
                        <Button onClick={() => handleAuth('/login', { email, password })}>
                            Entrar
                        </Button>

                    </>
                ) : (
                    <>
                        <Button
                            className="text-button"
                            onClick={() => {
                                setIsLogin(true);
                                setDisplayMessageError(false);
                            }}
                        >
                            Entrar
                        </Button>
                        <Button onClick={() => {
                            if (password !== confirmPassword) {
                                setDisplayMessageError(true);
                                return;
                            }
                            handleAuth('/register', { email, password, type: TYPE_USER_CLIENT });
                        }}
                        >
                            Registrar
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Form;
