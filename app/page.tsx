import { Vazirmatn } from 'next/font/google'
//
import BigAdd from "./components/homeCOM/bigAdd";
import HomeAdd from './components/homeCOM/upLine'
import ShopNow from './components/homeCOM/ShopNow'
import MostSelles from "./components/homeCOM/MostSelles";
import New from "./components/homeCOM/New";
import  HowWeArr  from "./components/homeCOM/HowWeArr";
import  Rewards  from "./components/homeCOM/Rewards";
import  CustomLogo  from "./components/homeCOM/CustomLogo";


const vazirmatn = Vazirmatn({
 subsets: ['arabic'],
})

export default function Home() {
  return (
    <main dir="rtl" className={`flex-col justify-center`}>
        <HomeAdd/>
        <ShopNow/>
        <BigAdd/>
        <MostSelles/>
        <New/>
        <HowWeArr/>
        <Rewards/>
        <CustomLogo/>
    </main>
  )
}
// فونت جوجل
// شكل السهم