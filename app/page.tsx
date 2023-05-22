import { Vazirmatn } from 'next/font/google'
//
import BigAdd from "./components/homeCOM/bigAdd";
import HomeAdd from './components/homeCOM/upLine'
import ShopNow from './components/homeCOM/ShopNow'
// import MostSelles from "./components/homeCOM/MostSelles";
import Newcrds from "./components/homeCOM/Newcrds";
import  HowWeArr  from "./components/homeCOM/HowWeArr";
import  Rewards  from "./components/homeCOM/Rewards";
import  CustomLogo  from "./components/homeCOM/CustomLogo";
import getnewst from "../lib/getnewst"


const vazirmatn = Vazirmatn({
 subsets: ['arabic'],
})

// 

export default async function Home() {
  const imgdata = await getnewst()

  return (
    <main dir="rtl" className={`flex-col justify-center`}>
        <HomeAdd/>
        <ShopNow/>
        <BigAdd/>
        <Newcrds data={imgdata} />
        <HowWeArr/>
        <Rewards/>
        <CustomLogo/>
    </main>
  )
}
// فونت جوجل
// شكل السهم