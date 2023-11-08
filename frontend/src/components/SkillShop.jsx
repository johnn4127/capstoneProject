import React, { useContext, useState } from 'react'

//Context imports
import { PlayerData } from './Game'

const SkillShop = () => {

    //Contexts
    const { player, setPlayer } = useContext(PlayerData)

    
    //States
    const [skill1, setSkill1] = useState({
        name: 'Delicious Apple',
        description: 'Sets your HP to 25%.',
        effect: () => {
            setPlayer({ ...player, confidence: Math.round(player.maxConfidence * 0.25) })
            setSkill1({ ...skill1, bought: true })
            console.log('Bought')
        },
        price: 100,
        bought: false
    });

    const [skill2, setSkill2] = useState({
        name: 'Bandage',
        description: 'Sets your HP to 50%.',
        effect: () => {
            setPlayer({ ...player, confidence: Math.round(player.maxConfidence * 0.50)  });
            setSkill2({...skill2, bought: true})
            console.log('Bought')
        },
        price: 150,
        bought: false
    });
    
    const [skill3, setSkill3] = useState({
        name: 'Medkit',
        description: 'Sets your HP to 75%.',
        effect: () => {
            setPlayer({ ...player, confidence: Math.round(player.maxConfidence * 0.75) });
            setSkill3({...skill3, bought: true})
            console.log('Bought')
        },
        price: 200,
        bought: false
    });
    
    const [skill4, setSkill4] = useState({
        name: 'Nano Stim',
        description: 'Sets your HP to 100%.',
        effect: () => {
            setPlayer({ ...player, proficiency: player.maxConfidence });
            setSkill4({...skill4, bought: true})
            console.log('Bought')
        },
        price: 300,
        bought: false
    });
    
    // const [skill5, setSkill5] = useState({
    //     name: 'Enery Drink',
    //     description: 'Boosts your proficiency by 50%.',
    //     effect: () => {
    //         setPlayer({ ...player, proficiency: player.proficiency + 100 });
    //         setSkill5({...skill5, bought: true})
    //         console.log('Bought')
    //     },
    //     price: 200,
    //     bought: false
    // });

    const skillShop = [skill1, skill2, skill3, skill4]

    const buy = (skill) => {
        if (player.exp >= skill.price) { 
            setPlayer({
                ...player,
                exp: player.exp - skill.price, 
                skills: [...player.skills, skill], 
            });
            
        }

    }

    return (
        <>
            <h3 style={{ alignSelf: 'center' }}>Consumables</h3>
            {skillShop.map((skill, index) => (
                <div key={index}>
                    <button
                        value={skill.name}
                        onClick={() => buy(skill)}
                        disabled={skill.bought == true}>
                        {skill.name}
                    </button>
                    <p>{skill.description}</p>
                    <p>Price: {skill.price} exp</p>
                </div>
            ))}
        </>
    )
}

export default SkillShop