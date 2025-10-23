import {useState, useEffect} from 'react';
const Pokemoncard = ({pokeId}) =>{
    const [pokemonName, setPokemonName] = useState("");
    const [pokeSprite, setPokemonSprite] = useState(null);
    const [pokeWeight, setPokeWeight] = useState("");
    const [pokeHeight, setPokeHeight] = useState("");
    let [isShown, setDisplay]= useState(false); // Used to determine if the button has been clicked.

    
    useEffect(()=> {
        const fetchData = async () => {
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
            const data = await response.json();
            console.log(data);
            const spriteSrc = data.sprites.front_default
            let pokemon = data.name;
            // This is just to make the first letter capital
            let firstLetter = pokemon[0].toUpperCase();
            let lastLetters = pokemon.substring(1, pokemon.length);
            const fullName = firstLetter + lastLetters;

            const pokemonWeight = data.weight;
            const pokemonHeight = data.height;



            setPokemonName(fullName);
            setPokemonSprite(spriteSrc);
            setPokeWeight(pokemonWeight);
            setPokeHeight(pokemonHeight);
            setDisplay(true)
            }
            fetchData().catch((error) => console.log(error))
    }, [pokeId]);
    return (
    <div>
        { isShown && 
            <div className='cardContainer' >
            <div>
                {pokemonName}<br/>              
                Height: {pokeHeight}<br/>
                Weight: {pokeWeight}<br/>
            </div>
            <div><img src={pokeSprite}/></div>
        </div>
        }
         
        
    </div>
    )
}
export default Pokemoncard;