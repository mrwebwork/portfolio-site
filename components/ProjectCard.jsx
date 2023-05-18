import React from "react";

export default function ProjectCard({
  image,
  text,
  description,
  linkText,
  href,
}) {
  return (
    <article className="project-card mb-5 py-10 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-2xl space-y-2 sm:space-y-0 flex flex-col items-center text-center">
      <img src={image} alt={text} className="h-24 rounded-md mb-4" />
      <div className="space-y-2">
        <div className="space-y-0.5 mb-3">
          <p className="text-lg text-black font-semibold">{text}</p>
          <p className="text-slate-500 font-medium">{description}</p>
        </div>
        <a
          href={href}
          target="_blank"
          className="px-4 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          {linkText}
        </a>
      </div>
    </article>
  );
}
