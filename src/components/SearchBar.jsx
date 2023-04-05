/** @format */
import SearchIcon from "../images/search-icon.png";
import VoiceSearchIcon from "../images/google-voice-search-icon.png";
import CameraLensIcon from "../images/google-camera-lens-icon.png";

const SearchBar = () => {
	return (
		<div
			style={{
				width: "90%",
				borderRadius: "30px",
				padding: "18px",
				border: "1px solid black",
				margin: "20px auto",
			}}
		>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<img
					src={SearchIcon}
					alt="search icon"
					style={{ height: "16px" }}
				/>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						gap: "20px",
					}}
				>
					<img
						src={VoiceSearchIcon}
						alt="google voice search icon"
						style={{ height: "16px" }}
					/>
					<img
						src={CameraLensIcon}
						alt="google camera lens icon"
						style={{ height: "16px" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
