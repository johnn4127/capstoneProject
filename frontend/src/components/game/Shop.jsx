import React, { useState } from 'react'

const Shop = () => {
    const [player, setPlayer] = useState(
        {
            attack: 12,
            confidence: 30,
            skills: [],
            exp: 1000
        })


    const skill1 = {
        name: 'Take a Breather',
        effect: () => { //sets the skill effect as a function
            {
                setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * .10)) })
                console.log(player.confidence)
            }
        },
        price: 300,
        bought: false
    }

    const shop = [skill1]

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


    return (
        <>
            <div>
                <ul>
                    <li>attack: {player.attack}</li>
                    <li>confidence: {player.confidence}</li>
                    <li>skills: {player.skills.map((skill, index) => (
                        <span key={index}>{skill.name},</span>
                    ))}
                    </li>
                    <li>exp: {player.exp}</li>
                </ul>
            </div>
            <div>
                {shop.map((item, index) => (
                    <div key={index}>
                        <button 
                        onClick={item.effect}>
                            {item.name}
                        </button>
                        <p>price: {item.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Shop 