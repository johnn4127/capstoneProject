import React, { useContext, useState } from 'react'

//Context imports
import { PlayerData } from './Game'

const ItemShop = () => {

    //Contexts
    const { player, setPlayer } = useContext(PlayerData)

    //States
    const [item1, setItem1] = useState({
        name: 'Armor Upgrade',
        desc: 'Increases max HP by 50%.',
        price: 300,
        uses: 3,
        effect: () => {
            if (item1.uses > 0) {
                setPlayer({ ...player, maxConfidence: player.maxConfidence * 1.5, confidence: player.maxConfidence * 1.5 })
                setItem1({ ...item1, uses: item1.uses -= 1, price: item1.price *= 1.5 })
                console.log('Bought')
            }
        }
    })

    const [item2, setItem2] = useState({
        name: 'Damage Amplifier',
        desc: 'Increases proficency by 50%.',
        price: 300,
        uses: 3,
        effect: () => {
            if (item2.uses > 0) {
                setPlayer({ ...player, proficiency: Math.round(player.proficiency * 1.5) })
                setItem2({ ...item2, uses: item2.uses -= 1, price: item2.price *= 1.5 })
            }
        }
    })

    const itemShop = [item1, item2]

    const buyUpgrade = (upgrade) => {
        if (player.exp >= upgrade.price) {
            upgrade.effect()
        }
    }

    return (
        <>
            <h3 style={{ alignSelf: 'center' }}>Upgrades</h3>
            {itemShop.map((item, index) => (
                <div key={index}>
                    <button
                        value={item.name}
                        onClick={() => buyUpgrade(item)}
                        disabled={item.uses == 0}>
                        {item.name}
                    </button>
                    <p>{item.desc}</p>
                    <p>Available: {item.uses}</p>
                    <p>Price: {item.price} exp</p>
                </div>
            ))}
        </>
    )
}

export default ItemShop