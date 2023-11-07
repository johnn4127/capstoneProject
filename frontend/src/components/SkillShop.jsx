import React, { useContext, useState } from 'react'

//Context imports
import { PlayerData } from './Game'

const SkillShop = () => {

    //Contexts
    const { player, setPlayer } = useContext(PlayerData)

    //States
    const [skill1, setSkill1] = useState({
        name: 'Delicious Apple',
        description: 'Heals your HP by 110%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.10)) });
            setSkill1({...skill1, bought: true})
            console.log('Bought')
        },
        price: 300,
        bought: false
    });

    const [skill2, setSkill2] = useState({
        name: 'Enery Drink',
        description: 'Boosts your proficiency by 50%.',
        effect: () => {
            setPlayer({ ...player, proficiency: player.proficiency + 100 });
            setSkill2({...skill2, bought: true})
            console.log('Bought')
        },
        price: 200,
        bought: false
    });

    const [skill3, setSkill3] = useState({
        name: 'Med Kit',
        description: 'Heals your HP by 250.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + 250 });
            setSkill3({...skill3, bought: true})
            console.log('Bought')
        },
        price: 350,
        bought: false
    });

    const [skill4, setSkill4] = useState({
        name: 'Bandage',
        description: 'Heals your HP by 110%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.10)) });
            setSkill4({...skill4, bought: true})
            console.log('Bought')
        },
        price: 200,
        bought: false
    });

    const [skill5, setSkill5] = useState({
        name: 'Power Up',
        description: 'Boosts your proficiency by 10%.',
        effect: () => {
            setPlayer({ ...player, proficiency: player.proficiency + (Math.round(player.proficiency * 0.10)) });
            setSkill5({...skill5, bought: true})
            console.log('Bought')
        },
        price: 300,
        bought: false
    });


    const skillShop = [skill1, skill2, skill3, skill4, skill5]

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