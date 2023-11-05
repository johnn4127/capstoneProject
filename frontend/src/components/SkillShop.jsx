import React, { useContext, useState } from 'react'
import { PlayerData } from './Game'

const SkillShop = () => {

    const { player, setPlayer, setShop, setPause } = useContext(PlayerData)

    const [skill1, setSkill1] = useState({
        name: 'Take a Breather',
        description: 'Heals your confidence by 10%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.10)) });
            setSkill1({...skill1, bought: true})
        },
        price: 300,
        bought: false
    });

    const [skill2, setSkill2] = useState({
        name: 'Resume Template',
        description: 'Boosts your proficiency by 15%.',
        effect: () => {
            setPlayer({ ...player, proficiency: player.proficiency + (Math.round(player.proficiency * 0.15)) });
            setSkill2({...skill2, bought: true})
        },
        price: 200,
        bought: false
    });

    const [skill3, setSkill3] = useState({
        name: 'Star Method',
        description: 'Heals your confidence by 20%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.20)) });
            setSkill3({...skill3, bought: true})
        },
        price: 350,
        bought: false
    });

    const [skill4, setSkill4] = useState({
        name: 'Charm',
        description: 'Heals your confidence by 10%.',
        effect: () => {
            setPlayer({ ...player, confidence: player.confidence + (Math.round(player.confidence * 0.10)) });
            setSkill4({...skill4, bought: true})
        },
        price: 200,
        bought: false
    });

    const [skill5, setSkill5] = useState({
        name: 'Concise Elevator Pitch',
        description: 'Boosts your proficiency by 10%.',
        effect: () => {
            setPlayer({ ...player, proficiency: player.proficiency + (Math.round(player.proficiency * 0.10)) });
            setSkill5({...skill5, bought: true})
        },
        price: 300,
        bought: false
    });


    const skillShop = [skill1, skill2, skill3, skill4, skill5]
    // const [disClick, setDisClick] = useState(false)
    // const testClick = (e, item) => {
    //     console.log(e, item)
    //     if(e.target.value === item.name){
    //         setDisClick(true)
    //     }
    // }

    const buy = (skill) => {
        if (player.exp >= skill.price) { //checks if player has enough experience to purchase skill
            setPlayer({
                ...player,
                exp: player.exp - skill.price, //subtracts skill price from players exp points
                skills: [...player.skills, skill], //adds the purchased skill to the players skills array
            });
            skill.bought = true
            console.log('Bought')
        }

    }

    return (
        <>
            <h3 style={{ alignSelf: 'center' }}>Skills</h3>
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