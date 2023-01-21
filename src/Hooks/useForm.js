import { useState } from "react";

//custom hooks para el formulario

export const Form = (initialForm ={}) =>{
    const [formState, setFormState] = useState(initialForm);

    const onChange = ({target}) =>{
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onReset = () =>{
        setFormState(initialForm)
    }

    return{
        ...formState, //desestrucutrado
        formState,
        onChange,
        onReset
    }
}