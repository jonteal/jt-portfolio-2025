import type { WorkItem } from "@/utils/work";
import { Link } from "react-router";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";

type WorkCardProps = {
  card: WorkItem;
};

export const WorkCard = ({ card }: WorkCardProps) => (
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        className="hover:scale-125 transition-all duration-500 cursor-pointer max-h-52 object-cover"
        src={card.images[0]?.src}
        alt={card.title}
      />
    </figure>
    <Card className="card-body">
      <CardHeader className="card-title">{card.title}</CardHeader>
      <CardDescription>{card.description}</CardDescription>
      <CardFooter className="card-actions justify-end">
        <Link to={`/project/${card.id}`} className="btn btn-primary">
          See Details
        </Link>
      </CardFooter>
    </Card>
  </div>
);
