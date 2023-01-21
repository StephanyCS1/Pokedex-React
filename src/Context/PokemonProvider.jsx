import { useState, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";
import { Form } from '../Hooks/useForm'

export const PokemonProvider = ({ children }) => {

    const [offset, setOffset] = useState(0);
    const [listPokemons, setListPokemons] = useState([]);
    const [thirtyPokemons, setThirtyPokemons] = useState([]);
    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(true);

    const [selectType, setSelectType] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    });

    const { valueSearch, onChange, onReset } = Form({
        valueSearch: '',
    })

    //Traer 30 pokemones por pag
    const getPokemons = async (limit = 30) => {
        const urlInit = "https://pokeapi.co/api/v2/";

        const res = await fetch(
            `${urlInit}pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();
        const info = await data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const result = await Promise.all(info);
        console.log(result)
        setThirtyPokemons([...thirtyPokemons, ...result]);
        setLoading(false);
    };

    //traer todos los pokemons
    const getAllPokemons = async () => {
        const urlInit = "https://pokeapi.co/api/v2/";

        const res = await fetch(
            `${urlInit}pokemon?limit=100000&offset=0`
        );

        const data = await res.json();

        const info = await data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const result = await Promise.all(info);

        setListPokemons(result);
        setLoading(false);
    };

    useEffect(() => {
        getPokemons();
    }, [offset]); //cuadno cambie el offset se vuelve a ejecutar la función

    //use Effect para traer todos
    useEffect(() => {
        getAllPokemons()
    }, []);

    //Tomar info del pokemon seleccionado
    const getInfo = async (id) => {
        const urlID = 'https://pokeapi.co/api/v2/';

        const rest = await fetch(`${urlID}pokemon/${id}`)
        const data = await rest.json();
        return data;
    }

    const onClickLoad = () => {
        setOffset(offset + 30)
    }

    const [findPokemons, setFindPokemons] = useState([]);

    const handleCheck = e => {
        setSelectType({
            ...selectType,
            [e.target.name]: e.target.checked,
        })
        if (e.target.checked) {
            const pokeFiltered = listPokemons.filter(pokemon =>
                pokemon.types.map(item =>
                    item.type.name).includes(e.target.name)
            );
            setFindPokemons([...findPokemons, ...pokeFiltered])
        } else {
            //selecciona los pokemons que no cuemplen con el filtro
            const pokeFiltered = findPokemons.filter(pokemon =>
                !pokemon.types.map(item =>
                    item.type.name).includes(e.target.name)
            );
            setFindPokemons([...pokeFiltered])
        }
    }

    return (
        <PokemonContext.Provider
            value={{
                valueSearch,
                onChange,
                onReset,
                thirtyPokemons,
                listPokemons,
                getInfo,
                onClickLoad,
                loading,
                setLoading,
                active,
                setActive,
                handleCheck,
                findPokemons,

            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};
