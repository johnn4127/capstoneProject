import React, { useContext, useState } from 'react'

//Context import
import { PlayerData } from './Game'

//Component imports
import SkillShop from './SkillShop'
import ItemShop from './ItemShop'

//Style imports
import '../stylesheets/Shop.css'

const Shop = () => {

    //Contexts
    const { player, setShop, setPause } = useContext(PlayerData)

    //States
    const [storeMode, setStoreMode] = useState(false)

    const handleStoreMode = () => {//Handles rendering of item store vs upgrade store
        if (!storeMode) {
            setStoreMode(true)
        } else {
            setStoreMode(false)
        }
    }

    const closeShop = () => {//Handles closing the shop and returning to pause menu.
        setShop(false)
        setPause(true)
    }

    return (
        <>
            <div id='shopMain'>
                <div style={{ display: 'flex' }}>
                    <h1>Welcome to Evoke</h1>
                    <button onClick={handleStoreMode}>
                        {!storeMode ? (<>Upgrades</>) : (<>Skills</>)}
                    </button>
                </div>

                <div id='shopItems' style={{ overflow: 'scroll' }}>
                    {!storeMode ? (<SkillShop />) : (<ItemShop />)}
                    <p>Current EXP: {player.exp}</p>
                    <div>

                    </div>
                </div>
                <div id='exit'>
                    <button style={{ position: "absolute", bottom: 0 }} onClick={() => closeShop()}>Exit Shop</button>
                </div>
            </div>
        </>
    )
}


export default Shop 