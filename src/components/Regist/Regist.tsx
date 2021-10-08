import { useState } from 'react';
import {Link} from 'react-router-dom'
import '../Login/Login';

function Regist() {

    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const submitForm = (e: any) => {
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
                onChange={(e)  => setLoginValue(e.target.value)}
            />
            <input
                className='form__input'
                type='password'
                placeholder='Пароль'
                value={passValue}
                onChange={(e)  => setPassValue(e.target.value)}
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