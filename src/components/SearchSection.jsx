/** @format */

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import MenuItems from "./MenuItems";

const SearchSection = () => {
	return (
		<div className="search-section">
			<Logo />
			<SearchBar />
			<div className="search-feeling">
				<MenuItems title={"Google Search"} />
				<MenuItems title={"I'm Feeling Lucky"} />
			</div>
		</div>
	);
};

export default SearchSection;
