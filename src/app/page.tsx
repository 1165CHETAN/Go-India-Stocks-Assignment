/** @format */

import PageTitle from "@/components/PageTitle";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "Uncover the latest market movements, identify emerging patterns, and seize opportunities in dynamic trading environments with actionable insights.",
    icon: DollarSign,
    img:"Felix",
    title:"Market Mavericks"
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    discription: "Delve into the strategies and stories of trailblazing investors, exploring their unique approaches and the lessons they offer.",
    icon: Users,
    img:"Aneka",
    title:"Global Outlook"
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "Learn effective techniques for managing risk and capitalizing on market fluctuations, empowering you to navigate volatile conditions confidently.",
    icon: CreditCard,
    img:"Ginger",
    title:"Earnings Exposed"
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "Gain valuable perspectives on investment strategies, market trends, and economic developments to inform your decision-making and optimize portfolio performance.",
    icon: Activity,
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
              amount={d.amount}
              discription={d.discription}
              icon={d.icon}
              label={d.label}
              img={d.img}
              title={d.title}
            />
          ))}
        </section>
       
       
      </section>
    </div>
  );
}
