/** @format */

import Headshot from "../images/Usieme.jpeg";

const Avatar = () => {
	return (
		<div>
			<img
				src={Headshot}
				alt="usieme headshot"
				style={{ height: "30px", borderRadius: "50%" }}
			/>
		</div>
	);
};

export default Avatar;
