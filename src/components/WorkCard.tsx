import type { WorkItem } from "@/utils/work";
import { Link } from "react-router";

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
    <div className="card-body">
      <h2 className="card-title">{card.title}</h2>
      <p>{card.description}</p>
      <div className="card-actions justify-end">
        <Link to={`/project/${card.id}`} className="btn btn-primary">
          See Details
        </Link>
      </div>
    </div>
  </div>
);
