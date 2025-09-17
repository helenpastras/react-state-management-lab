// src/App.jsx
import './App.css';
import { useState } from 'react';


const FighterCard = ({ fighter, onAdd, canAfford }) => (
  <div className="fighterCard">
    <img src={fighter.img} alt={fighter.name} width="100" />
    <h4>{fighter.name}</h4>
    <p>Price: ${fighter.price}</p>
    <p>Strength: {fighter.strength}</p>
    <p>Agility: {fighter.agility}</p>
    {onAdd && (
      <button
        onClick={() => onAdd(fighter)}
        disabled={!canAfford}
      >
        Add Fighter
      </button>
    )}
  </div>
);

const App = () => {
  const handleAddFighter= (fighter) => {
    console.log(fighter)
    if (money >= fighter.price) {
      setTeam(newTeam => [...newTeam, fighter]);
      setZombieFighters(currentFighters => currentFighters.filter(f => f.id !== fighter.id));
      setMoney(availMoney => availMoney - fighter.price);
    } else {
      console.log("Not enough money");

    }
  }
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: '/images/Survivor-ZombieFighter.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'public/images/Scavenger-ZombieFighter.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'public/images/Shadow-ZombieFighter.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'public/images/Tracker-ZombieFighter.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'public/images/Sharpshooter-ZombieFighter.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'public/images/Medic-ZombieFighter.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'public/images/Engineer-ZombieFighter.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'public/images/Brawler-ZombieFighter.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'public/images/Infiltrator- ZombieFighter.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'public/images/Leader-ZombieFighter.png',
  }]
)

  return (
    <>
    <h1>Let's get ready to fight some zombies!</h1>
    <h3>You have ${money} available to spend on building your team.</h3>
      <div>
        <section className="fighterCard">
  {zombieFighters.map((zombieFighter) => (
    <FighterCard
      key={zombieFighter.id}
      fighter={zombieFighter}
      onAdd={handleAddFighter}
      canAfford={money >= zombieFighter.price}
    />
  ))}
</section>
      </div>
      <div>
        <h3>Your Team:</h3>
        <section className="fighterCard">
          {team
            .filter(fighter => fighter && fighter.name)
            .map(fighter => (
              <FighterCard key={fighter.id} fighter={fighter} />
            ))}
        </section>
      </div>
    </>
  );
}

export default App
