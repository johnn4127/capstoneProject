import React, {useState} from 'react'

const Profile = () => {
  const [difficulty, setDifficulty] = useState(0)

  // const characters = [
  //     {engineerGuy:
  //         {   skill: (7 *= difficulty),
  //             employability: 2,
  //             confidence: 10,
  //             passive: a
  //         }},
  //     {cyberSecurityGuy:
  //         {   skill: 7,
  //             employability: 2,
  //             confidence: 10,
  //             passive: Debuffs
  //         }},
  //     {managerGuy:
  //         {   skill: 7,
  //             employability: 2,
  //             confidence: 10,
  //             passive: a
  //         }},
  //     {techSupportGuy:
  //         {   charm: 7,
  //             skill: 2,
  //             confidence: 10,
  //             passive: Buffs
  //         }},
  //     {technicianGuy:
  //         {   skill: 7,
  //             employability: 2,
  //             confidence: 10,
  //             passive: a
  //         }}
  // ]

  const [player, setPlayer] = useState(
    {
      skill: 7,
      preparation: 7,
      confidence: 12,
      experience: 0,
      items: []
    }
  ) 

  const enemies = [{
      project: {},
      recruiter: {},
      hiringManager: {},
      team: {}}
  ]

  const levels = [{1: 'bootCamp'}, {2:'freelance'},{3:'startUp'},{4:'corporate'}]

  const paths = [careeFair, freelance, startUp, corporate]

  const situations = [question, project]

  const skill = [ ]

  const items = []

  const handleConsole = (num) => {
      setDifficulty(num)
      console.log(characters.engineerGuy.skill)
  }

  return (
    <div>
      <button type='button' onClick={handleConsole}>Console</button>
    </div>
  )
}

export default Profile