import { Link } from "react-router-dom";
import { basePath } from "../../utils/routes";

interface ItemCardProps {
  previewSrc: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  previewSrc,
  title,
  description,
  tags,
  link,
}) => {
  return (
    <div className="flex flex-col h-full bg-bg rounded-xl border border-border-muted overflow-hidden transition-all hover:shadow-lg hover:border-border">
      {/* PREVIEW */}
      <div className="h-48 bg-bg-dark flex items-center justify-center overflow-hidden">
        <img
          src={previewSrc}
          alt={title + " Preview"}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        {/* TITLE */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* DESCRIPTION */}
        <div className="relative max-h-24 overflow-hidden mb-4 min-h-20">
          <p className="text-text-muted">{description}</p>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-bg to-transparent pointer-events-none"></div>
        </div>

        {/* SPACER */}
        <div className="flex-1" />

        <div>
          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-bg-dark text-sm rounded-full text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* LINK */}
          <Link
            to={basePath + link}
            className="inline-block px-4 py-2 text-primary font-medium hover:bg-bg-dark rounded-lg"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
