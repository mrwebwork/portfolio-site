import React from "react";
import Image from "next/image";

//* The ProjectCard component is responsible for rendering a single project card
export default function ProjectCard({
  className,
  image,
  text,
  description,
  linkText,
  href,
  showCodeLink = false,
  codeLink,
  codeLinkText = "View Code",
}) {
  return (
    <article
      className={`mb-5 py-10 px-10 max-w-xs sm:max-w-sm lg:w-[310px] mx-auto bg-white rounded-xl shadow-2xl flex flex-col items-center text-center ${className}`}
    >
      <Image
        src={image}
        alt={text}
        className="h-40 mb-4 rounded-tl-3xl rounded-br-3xl"
        width={160}
        height={160}
      />
      <div
        className={
          showCodeLink ? "space-y-2 flex flex-col" : "space-y-6 flex flex-col"
        }
      >
        <div className="space-y-0.5 mb-3">
          <p className="text-lg text-black project-card-heading">{text}</p>
          <p className="text-slate-500 project-card-description">
            {description}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-2 shadow-lg hover:shadow-xl"
        >
          {linkText}
        </a>
        {showCodeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3 mx-0 shadow-lg hover:shadow-xl"
          >
            {codeLinkText}
          </a>
        )}
      </div>
    </article>
  );
}
