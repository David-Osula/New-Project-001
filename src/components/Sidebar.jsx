import React from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../utils/Constant";
import useFetchData from "../hooks/useFetchData";
import Spinner from "../utils/Spinner";


export default function Sidebar({setShowMenu}) {
  const { error, genres } = useFetchData("genre/movie/list");
  if (!genres) return <Spinner />;

  return (
    <div className="d-flex flex-column gap-2 px-lg-2 mt-lg-5 py-3 py-lg-0 scrollbody sideAdjust">
      <h1 className="text-secondary fs-6 mt-2 mt-lg-5 mb-1 mb-lg-2 px-2">
        Discover
      </h1>
      {categories.map((category, index) => (
        <NavLink
          to={`/${category.href}`}
          key={index}
          className={({ isActive }) =>
            isActive ? "text-warning" : "text-white"
          }
          onClick={() =>setShowMenu(false)}
        >
          <div className="d-flex gap-2 align-items-center py-1 menu">
            <div style={{ fontSize: "1.3rem" }}>{category.icon}</div>
            <span>{category.name}</span>
          </div>
        </NavLink>
      ))}

      <hr className="text-white" />
      <h1 className="text-secondary fs-6 mt-1 mt-lg-2 mb-1 px-2">
        Movie Genres
      </h1>
      {error && <p className="text-white mt-2 fs-5">{error.message}</p>}
      {genres.map((genre) => (
        <div key={genre.id} className="mb-0">
          <NavLink
            to={`/movies/genres/${genre.id}`}
            className={({ isActive }) =>
              isActive ? "text-warning" : "text-white"
            }
            onClick={() =>setShowMenu(false)}
          >
            {" "}
            <p className="mb-0 small menu">{genre.name}</p>
          </NavLink>
        </div>
      ))}
      <p className="small text-white px-2">copyright TMDB 2023</p>
    </div>
  );
}
