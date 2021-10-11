import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../Login/Login';

const Regist:React.FC = () => {

    const [loginValue, setLoginValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');

    const submitForm = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();

        const formData = {
            login: loginValue,
            password: passValue
        }

        if (loginValue === '' || passValue === '') {
            console.log('Введите корректные данные')
        } else {
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('success regist', formData)
            setLoginValue('');
            setPassValue('');
        }
    }

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        const {target: {value: loginValue}} = e;
        setLoginValue(loginValue)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        const {target: {value: passValue}} = e;
        setPassValue(passValue)
    }

  return (
    <div>
        <form 
            className='form'
            onSubmit={submitForm}
        >
            <h2 className='form__title'>Регистрация</h2>
            <input
                className='form__input'
                type='text'
                placeholder='Логин'
                value={loginValue}
                onChange={handleLoginChange}
            />
            <input
                className='form__input'
                type='password'
                placeholder='Пароль'
                value={passValue}
                onChange={handlePasswordChange}
            />
            <button
                className='form__btn'
            >
                Зарегистрироваться
            </button>
            <Link 
                className='form__link'
                to='/login'
            >
                Войти
            </Link>
        </form>
    </div>
  );
}

export default Regist;