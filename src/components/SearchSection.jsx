/** @format */

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Buttons from "./Buttons";
import LanguageLinks from "./LanguageLinks";

const SearchSection = () => {
	return (
		<div className="search-section">
			<Logo />
			<SearchBar />
			<Buttons />
			<LanguageLinks />
		</div>
	);
};

export default SearchSection;
