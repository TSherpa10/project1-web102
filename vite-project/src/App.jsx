import './App.css';
import Card from './components/Card'

const App = () => {

  return (
    <div className='hero'>
      <div>
        <img className="imgNumbers" src="../public/rankingnumbers.png"/>
        <h1>Top 10 Basketball Players of All Time <a href="https://www.youtube.com/watch?v=JRSYmQr73g0"><button className='basketball-btn'><span>🏀</span></button></a></h1>
        <h2>(In no particular order)</h2>
        <h3>Click the buttons to learn more about them!</h3>
      </div>
      <Card className="Card" img="../public/nbalebron.jpeg" name="Lebron James" info="Small Forward, 2010s" link="https://en.wikipedia.org/wiki/LeBron_James"/>
      <Card className="Card" img="../public/nbajordan.jpeg" name="Michael Jordan" info="Shooting Guard, 1990s" link="https://en.wikipedia.org/wiki/Michael_Jordan"/>
      <Card className="Card" img="../public/nbakareem.webp" name="Kareem Abdul Jabbar" info="Center, 1970s" link="https://en.wikipedia.org/wiki/Kareem_Abdul-Jabbar"/>
      <Card className="Card" img="../public/nbaphoto_magic.jpeg" name="Magic Johnson" info="Point Guard, 1980s" link="https://en.wikipedia.org/wiki/Magic_Johnson"/>
      <Card className="Card" img="../public/nbaphoto_larry.webp" name="Larry Bird" info="Power Forward, 1980s" link="https://en.wikipedia.org/wiki/Larry_Bird"/>
      <Card className="Card" img="../public/nbaphoto_russell.jpeg" name="Bill Russell" info="Center, 1960s" link="https://en.wikipedia.org/wiki/Bill_Russell"/>
      <Card className="Card" img="../public/nbaphoto_wilt.jpeg" name="Wilt Chamberlain" info="Center, 1960s" link="https://en.wikipedia.org/wiki/Wilt_Chamberlain"/>
      <Card className="Card" img="../public/nbaphoto_duncan.jpeg" name="Tim Duncan" info="Power Forward, 2000s" link="https://en.wikipedia.org/wiki/Tim_Duncan"/>
      <Card className="Card" img="../public/nbaphoto_kobe.webp" name="Kobe Bryant" info="Shooting Guard, 2000s" link="https://en.wikipedia.org/wiki/Kobe_Bryant"/>
      <Card className="Card" img="../public/nbaphoto_hakeem.jpeg" name="Hakeem Olajuwon" info="Center, 1990s" link="https://en.wikipedia.org/wiki/Hakeem_Olajuwon"/>
    </div>
  )
}
export default App
