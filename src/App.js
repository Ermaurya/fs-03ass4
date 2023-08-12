import Card from './component/Card';
import './App.css';

function App() {
  return (
    <div>
      <Card name='Bright' subtitle='2017, David Ayer'
        description=' Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.'
        image='https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg'
        background='https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg'
        time='117 min'
        m_type='Action, Crime, Fantasy'
        rating='⭐⭐⭐⭐'
      />
      <Card name='Tomb Raider' subtitle='2018, Roar Uthaug'
        description='Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.'
        image='https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg'
        background='https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png'
        time='125 min'
        m_type='Action, Fantasy'
        rating='⭐⭐⭐⭐'
      />
      <Card name='Black Panther' subtitle='2018, Ryan Coogler'
        description=' Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.'
        image='https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg'
        background='https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg'
        time='134 min'
        m_type='Action, Adventure, Sci-Fi'
        rating='⭐⭐⭐⭐'
      />
    </div>
  );
}

export default App;
