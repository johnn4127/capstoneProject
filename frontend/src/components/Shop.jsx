import React, { useContext } from 'react'
import { PlayerData } from './Game'
import '../stylesheets/Shop.css'
import { PositionData } from './Game';
const Shop = () => {
    const {player, setPlayer, setShop, setPause} = useContext(PlayerData)


    const skill1 = {
        name: 'Take a Breather',
        description: 'Heals your confidence by 10%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.10)) });
            console.log(player.confidence);
        },
        price: 300,
        bought: false
    };
    
    const skill2 = {
        name: 'Resume Template',
        description: 'Boosts your proficiency by 15%.',
        effect: () => {
            setPlayer({ ...player, proficiency: player.proficiency + (Math.round(player.proficiency * 0.15)) });
            console.log(player.proficiency);
        },
        price: 200,
        bought: false
    };
    
    const skill3 = {
        name: 'Star Method',
        description: 'Heals your confidence by 20%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.20)) });
            console.log(player.confidence);
        },
        price: 350,
        bought: false
    };
    
    const skill4 = {
        name: 'Charm',
        description: 'Heals your confidence by 10%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.10)) });
            console.log(player.confidence);
        },
        price: 200,
        bought: false
    };
    
    const skill5 = {
        name: 'Concise Elevator Pitch',
        description: 'Boosts your proficiency by 10%.',
        effect: () => {
            setPlayer({ ...player, proficiency: player.proficiency + (Math.round(player.proficiency * 0.10)) });
            console.log(player.proficiency);
        },
        price: 300,
        bought: false
    };    
    

    const shop = [skill1, skill2, skill3, skill4, skill5]
    // const [disClick, setDisClick] = useState(false)
    // const testClick = (e, item) => {
    //     console.log(e, item)
    //     if(e.target.value === item.name){
    //         setDisClick(true)
    //     }
    // }
    const buy = (item) => {
        if (player.exp >= item.price) { //checks if player has enough experience to purchase item
            setPlayer({
                ...player,
                exp: player.exp - item.price, //subtracts item price from players exp points
                skills: [...player.skills, item], //adds the purchased skill to the players skills array
            });
            item.bought = true
            console.log('Bought')
        }

    }

    const closeShop = () => {
        setShop(false)
        setPause(true)
    }


    return (
        <>
        <div id='shopMain'>
            <h1>Welcome to Evoke</h1>
            <div>
            <div id='shopItems'>
                <h3 
                style={{alignSelf: 'center'}}>Skills</h3>
                
                {shop.map((item, index) => (
                    <div key={index}>
                        <button 
                        value={item.name}
                        onClick={() => buy(item)}
                        disabled={item.bought === true}>
                            {item.name}
                        </button>
                        <p>{item.description}</p>
                        <p>Price: {item.price} exp</p>
                    </div>
                ))}
                <p>Current EXP: {player.exp}</p>
                </div>
                <div>
                
                </div>
                <div id='exit'> 
                <button style={{ position: "absolute", bottom: 0 }} onClick={() => closeShop()}>Exit Shop</button>

                </div>
            </div>
         </div>
        </>
    )
}


export default Shop 