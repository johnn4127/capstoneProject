import React, { useContext, useState } from 'react'
import { PlayerData } from './Game'
import '../stylesheets/Shop.css'
import SkillShop from './SkillShop'
import ItemShop from './ItemShop'


const Shop = () => {
    const { player, setPlayer, setShop, setPause } = useContext(PlayerData)
    const [storeMode, setStoreMode] = useState(false) 

    const handleStoreMode = () => {
        if (!storeMode) {
            setStoreMode(true)
        } else {
            setStoreMode(false)
        }
    }

    const closeShop = () => {
        setShop(false)
        setPause(true)
    }


    return (
        <>
            <div id='shopMain'>
                <div style={{display: 'flex'}}>
                <h1>Welcome to Evoke</h1>
                <button onClick={handleStoreMode}>
                        {!storeMode ? (<>Upgrades</>) : (<>Skills</>)}
                    </button>

                    <button onClick={handleStoreMode}>
                        {!storeMode ? (<>Upgrades</>) : (<>Skills</>)}
                    </button>

                    <div id='shopItems' style={{ overflow: 'scroll' }}>
                        {!storeMode ? (<SkillShop />) : (<ItemShop />)}
                        <p>Current EXP: {player.exp}</p>
                    </div>
                    <div>

                    </div>
                    <div id='exit'>
                        <button style={{ position: "absolute", bottom: 0 }} onClick={() => closeShop()}>Exit Shop</button>

                    </div>
                </div>
                <div>
                    

                    <div id='shopItems' style={{ overflow: 'scroll' }}>
                        {!storeMode ? (<SkillShop />) : (<ItemShop />)}
                        <p>Current EXP: {player.exp}</p>
                    </div>
                </div>
                <div>
                    <div id='exit'>
                        <button style={{ position: "absolute", bottom: 0 }} onClick={() => closeShop()}>Exit Shop</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Shop 