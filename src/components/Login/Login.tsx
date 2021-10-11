import { useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { RootState } from '../../store';
import './Login.css';

const Login:React.FC = () => {

    const [loginValue, setLoginValue] = useState<string>('');
    const [passValue, setPassValue] = useState<string>('');

    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const dispatch = useDispatch();
    

    const submitForm = (e: React.FormEvent<HTMLFormElement>):void => {
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
            console.log('login', isAuth)
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
            <h2 className='form__title'>Вход</h2>
            <input
                name='login'
                className='form__input'
                type='text'
                placeholder='Логин'
                value={loginValue}
                onChange={handleLoginChange}
            />
            <input
                name='password'
                className='form__input'
                type='password'
                placeholder='Пароль'
                value={passValue}
                onChange={handlePasswordChange}
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