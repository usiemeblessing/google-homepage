/** @format */
import SearchIcon from "../images/search-icon.png";
import VoiceSearchIcon from "../images/google-voice-search-icon.png";
import CameraLensIcon from "../images/google-camera-lens-icon.png";

const SearchBar = () => {
	return (
		<div className="search-bar">
			<div className="search-icons-container">
				<img
					src={SearchIcon}
					alt="search icon"
					className="search-icons"
				/>
				<div className="right-side-search-icons">
					<img
						src={VoiceSearchIcon}
						alt="google voice search icon"
						className="search-icons"
					/>
					<img
						src={CameraLensIcon}
						alt="google camera lens icon"
						className="search-icons"
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
