/** @format */

import PageTitle from "@/components/PageTitle";
import Card, { CardProps } from "@/components/Card";

const cardData: CardProps[] = [
  {
    
    discription: "Uncover the latest market movements, identify emerging patterns, and seize opportunities in dynamic trading environments with actionable insights.",
    img:"Felix",
    title:"Market Mavericks"
  },
  {
    
    discription: "Delve into the strategies and stories of trailblazing investors, exploring their unique approaches and the lessons they offer.",
    img:"Aneka",
    title:"Global Outlooks"
  },
  {
    
    discription: "Learn effective techniques for managing risk and capitalizing on market fluctuations, empowering you to navigate volatile conditions confidently.",
    img:"Ginger",
    title:"Earnings Exposed"
  },
  {
    
    discription: "Gain valuable perspectives on investment strategies, market trends, and economic developments to inform your decision-making and optimize portfolio performance.",
    img:"Zoey",
    title:"Tech Disruption"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="" />
      
      <section className="gap-4 transition-all">
    
        
        <section className="flex flex-col gap-4">
          
           <p className="text-xl text-gray-500 font-semibold">Market Stories</p>
          {cardData.map((d, i) => (
            <Card
              key={i}
              discription={d.discription}
              img={d.img}
              title={d.title}
            />
          ))}
        </section>
       
       
      </section>
    </div>
  );
}
