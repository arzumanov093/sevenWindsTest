import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";


const Todo:React.FC = () => {
    
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const dispatch = useDispatch();
    {console.log(1, isAuth)}
    const exit = (e: React.MouseEvent<HTMLButtonElement>):void => {
        e.preventDefault();
        
        dispatch({
            type: "AUTH",
            payload: false
        })
        localStorage.removeItem('formData')
        console.log(2, isAuth)
    }

    return(
        <div>
            Todo List! <br/>
            <button
                onClick={exit}
            >
                exit
            </button>
        </div>
    )
}

export default Todo;