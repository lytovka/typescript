import React, {useRef} from 'react';
import '../index.css';

interface TodoFormProps {
    onAdd(title: string) : void
}

export const TodoForm: React.FC<TodoFormProps> = props => {

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }
    return(
        <>
            <div className='input-field mg2'>
                <input  
                    ref={ref}
                    type="text" 
                    id="title"
                    onKeyPress={keyPressHandler}/>
                <label htmlFor="title" className="active">Add todo</label>
            </div>
        </>
    )
}