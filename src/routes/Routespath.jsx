import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout,Error } from "../components";
import { Genres, Home, Popular,Person,Toprated,MovieId,PersonId } from "../pages";

export default function Routespath() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error/>}>
        <Route index element={<Home />} />
        <Route path="movies/genres/:id" element={<Genres />} />
        <Route path='person/popular' element={<Person/>}/>
        <Route path='movies/Popular' element={<Popular/>}/>
        <Route path='movies/top_rated' element={<Toprated/>}/>
        <Route path='movie/:movie_id' element={<MovieId/>}/>
        <Route path='person/:person_id' element={<PersonId/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
  