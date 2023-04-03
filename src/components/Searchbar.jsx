import React, { useEffect,useState } from "react";
import { form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import SearchResult from "./SearchResult";


export default function Searchbar({setShowMenu}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [resultBox,setResultBox] = useState(false)
  console.log(searchQuery)

  useEffect (() => {
    if (searchQuery !== '') {
      setResultBox(true)
    } else {
      setResultBox (false)
    }

  }, [searchQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery('')
  }

  return (
    <div className="position-relative">
      <form onSubmit={handleSubmit}>
        <div className="position-relative">
          <input
            type="text"
            placeholder="search Movies & People"
            className="border-0 border-bottom bg-dark text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
          {searchQuery.length > 0 ? (
            <AiOutlineClose
              className="text-white position-absolute top-50 end-0 translate-middle-y"
              style={{ cursor: "pointer" }}
              onClick={() => {setSearchQuery(` `) 
              setResultBox(false)
              }}
            />
          ) : (
            <FiSearch
              type="submit"
              className="text-white position-absolute top-50 end-0 translate-middle-y"
            />
          )}
        </div>
      </form>
      {resultBox && ( < SearchResult searchQuery={searchQuery} setResultBox={setResultBox} />)}
    </div>
  );
}