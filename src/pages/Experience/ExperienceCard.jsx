import React, { memo } from "react";
import { Link } from "react-router-dom";

const ExperienceCard = memo(({ to, image, alt, title }) => {
  return (
    <Link to={to}>
      <div>
        <img
          src={image}
          alt={alt}
          className="w-full h-60 object-cover mb-4 rounded-md"
        />
        <h1 className="text-center text-3xl">{title}</h1>
      </div>
    </Link>
  );
});

export default ExperienceCard;