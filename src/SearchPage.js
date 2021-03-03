import React from "react";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "./Search";
import { Description } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButton={true} />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/all">news</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/image">image</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/maps">more</Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__results">
        <p className="searchPage__resultCount">
          About {data?.searchInformation.formattedTotalResults} results (
          {data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>
        {data?.items.map((item) => (
          <div className="searchPage__result">
            <a href={item.link}>
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    src={item.pagemap?.cse_image[0]?.src}
                    alt=""
                    className="searchPage__resultImage"
                  />
                )}

              {item.displayLink}
            </a>
            <a className="searchPage__resultTitle" href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <p className="searchPage__resultSnippet">{item.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
