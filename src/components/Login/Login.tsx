import { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { RootState } from '../../store';
import './Login.css';

function Login() {

    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const dispatch = useDispatch();

    const submitForm = (e: any) => {
        e.preventDefault();

        const {login, password} = JSON.parse(localStorage.getItem('formData') || '{}');

        if(login !== loginValue) {
            console.log('Неверный логин');
        } else if (password !== passValue) {
            console.log('Неверный пароль');
        } else {
            console.log('success login', localStorage.getItem('formData'));
            setLoginValue('');
            setPassValue('');
            dispatch({
                type: 'AUTH',
                payload: true
            })
            
        }
    }

  return (
    <div>
        <form 
            className='form'
            onSubmit={submitForm}
        >
            <h2 className='form__title'>Вход</h2>
            <input
                name='login'
                className='form__input'
                type='text'
                placeholder='Логин'
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
            />
            <input
                name='password'
                className='form__input'
                type='password'
                placeholder='Пароль'
                value={passValue}
                onChange={(e) => setPassValue(e.target.value)}
            />
            <button
                className='form__btn'
            >
                Войти
            </button>
            <Link 
                className='form__link' 
                to='/regist'
            >
                Зарегистрироваться
            </Link>
        </form>
    </div>
  );
}

export default Login;