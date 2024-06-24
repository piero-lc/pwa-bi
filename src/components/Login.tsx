// src/components/Login.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username === '') {
            setErrorMessage('El campo usuario es obligatorio');
        } else if (password === '') {
            setErrorMessage('El campo contraseña es obligatorio');
        } else if (username === 'admin' && password === '123'){
            setErrorMessage('');
            console.log('Username:', username);
            console.log('Password:', password);
            navigate('/dashboard');
        } else {
            setErrorMessage('Credenciales incorrectas');
        }
    };

    return (
        <div className="container_module container_login">
            <div className="row">
                <div className="container_form_login column item_center relative">
                    <div className="p-6 mat-elevation-z1 container_card_login">
                        <h2 className="mb-1 text_center">Lindcorp BI</h2>
                        <p className="mb-5 text_center">Ingrese sus credenciales del sistema</p>

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Usuario:</label>
                            <div className="container_input_custom_login mb-3">
                                <PersonIcon style={{ fontSize: 18 }} />
                                <input
                                    type="text"
                                    placeholder="Ingrese su usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <label htmlFor="password">Contraseña:</label>
                            <div className="container_input_custom_login mb-3">
                                <LockIcon style={{ fontSize: 18 }} />
                                <input
                                    type="password"
                                    placeholder="Ingrese su clave"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                            <button type="submit" className="btn_login">
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </div>
                <div className="container_img_banner">
                    <img
                        src="/assets/images/banner_app.png"
                        alt="image_app"
                        className="image_banner"
                    />
                </div>
            </div>
        </div>

    );
};

export default Login;
