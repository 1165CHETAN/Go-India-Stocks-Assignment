/** @format */

import PageTitle from "@/components/PageTitle";
import Card, { CardProps } from "@/components/Card";
import SalesCard, { SalesProps } from "@/components/SalesCard";

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

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    para:"Lorem ipsum is a standard placeholder text used in the printing and publishing industries. It's made up of scrambled Latin text that emphasizes the design over the layout's content."
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    para:"Lorem ipsum is a standard placeholder text used in the printing and publishing industries. It's made up of scrambled Latin text that emphasizes the design over the layout's content."
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    para:"Lorem ipsum is a standard placeholder text used in the printing and publishing industries. It's made up of scrambled Latin text that emphasizes the design over the layout's content."
  },
  {
    name: "William Kim",
    email: "will@email.com",
    para:"Lorem ipsum is a standard placeholder text used in the printing and publishing industries. It's made up of scrambled Latin text that emphasizes the design over the layout's content."
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    para:"Lorem ipsum is a standard placeholder text used in the printing and publishing industries. It's made up of scrambled Latin text that emphasizes the design over the layout's content."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="" />
      
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
      <section className="flex flex-col gap-4">
          
          <p className="text-xl text-gray-500 font-semibold">Discussion Forum</p>
          
      
        {uesrSalesData.map((d, i) => (
          <SalesCard
            key={i}
            email={d.email}
            name={d.name}
            para={d.para}
          />
        ))}
      </section>
        
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
