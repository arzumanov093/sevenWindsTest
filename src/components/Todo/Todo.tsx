import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";


function Todo() {

    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const {isAuth} = useTypedSelector(state => state.authReducer)
    const dispatch = useDispatch();
    {console.log(1, isAuth);}
    const exit = (e: any) => {
        e.preventDefault();
        
        dispatch({
            type: "AUTH",
            payload: false
        })
        console.log(2, isAuth)
    }

    return(
        <div>
            123
            <button
                onClick={exit}
            >
                exit
            </button>
        </div>
    )
}

export default Todo;