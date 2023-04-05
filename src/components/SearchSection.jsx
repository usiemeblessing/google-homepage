/** @format */

import GoogleLogo from "../images/googlelogo.png";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const SearchSection = () => {
	return (
		<div
			style={{
				width: "700px",
				border: "1px solid black",
				margin: "30px auto",
			}}
		>
			<Logo />
			<SearchBar />
		</div>
	);
};

export default SearchSection;
