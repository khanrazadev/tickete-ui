import Image from "next/image";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from "./ui/accordion";
import { Button } from "./ui/button";

const fAQ = [
  {
    id: "1",
    title: "What should I do on my first trip to Rome?",
    details:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    id: "2",
    title: "What are some hidden gems to see in Rome?",
    details:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    id: "3",
    title: "How much time should I spend in Rome?",
    details:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    id: "4",
    title: "What food is Rome known for?",
    details:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    id: "5",
    title: "What is the best way to get around Rome?",
    details:
      "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
];

const FaQ = () => {
  return (
    <div className="space-y-4 py-6 md:grid grid-cols-3 gap-10">
      <div className="space-y-4 md:hidden">
        <h2 className="font-semibold text-2xl">Frequently asked questions</h2>
        <p className="text-muted-foreground">
          Here are some of our most asked questions.
        </p>
      </div>
      <div className="md:order-2 col-span-2">
        <Accordion type="single" collapsible>
          {fAQ.map((data) => (
            <div className="py-2">
              <AccordionItem value={data.id}>
                <AccordionTrigger>
                  <p className="md:font-semibold md:text-lg text-xs">
                    {data.title}
                  </p>
                </AccordionTrigger>
                <AccordionContent>{data.details}</AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>

      <div className="space-y-6">
        <div className="space-y-4 hidden md:block">
          <h2 className="font-semibold text-2xl">Frequently asked questions</h2>
          <p className="text-muted-foreground">
            Here are some of our most asked questions.
          </p>
        </div>
        <div className="bg-[#F9F9FB] h-fit md:order-1 rounded-lg flex justify-between p-6 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <p className="font-semibold text-lg">
              Still need help? <br />
              We’re here for you.
            </p>
            <Button className=" h-14 w-36 flex items-center gap-1 bg-black font-semibold text-lg">
              Chat with us
            </Button>
          </div>
          <Image
            height={100}
            width={150}
            alt="chat-icon"
            src={
              "https://assets.tickete.co/assets/chat-with-us/chat-with-us.svg?auto=format&fm=webp&fit=crop&w=378&h=270&q=auto"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FaQ;
