//* Importing required modules
import React from "react";

//* The ProjectCard component is responsible for rendering a single project card, including an image, description and related links.
export default function ProjectCard({
  //* Props destructuring to extract required properties
  image,
  text,
  description,
  linkText,
  href,
  showCodeLink = false, //* Default to not show the link to code
  codeLink,
  codeLinkText = "View Code",
}) {
  return (
    // * The 'article' tag is used to represent a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable.
    <article className="project-card mb-5 py-10 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-2xl space-y-2 sm:space-y-0 flex flex-col items-center text-center">
      <img
        src={image}
        alt={text}
        className="h-40 mb-4 rounded-tl-3xl rounded-br-3xl"
      />
      <div className="space-y-2">
        <div className="space-y-0.5 mb-3">
          <p className="text-lg text-black font-semibold">{text}</p>
          <p className="text-slate-500 font-medium">{description}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-2"
        >
          {linkText}
        </a>
        {showCodeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3"
          >
            {codeLinkText}
          </a>
        )}
      </div>
    </article>
  );
}
