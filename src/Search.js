import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Search = ({ hideButton = false }) => {
  const [{}, dispatch] = useStateValue();
  const [text, setText] = React.useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: text,
    });
    history.push("/search");
  };
  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButton && (
        <div className="search__button">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">i'm feeling lucky</Button>
        </div>
      )}
    </div>
  );
};

export default Search;
