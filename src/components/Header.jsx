/** @format */

import MenuItems from "./MenuItems";
import AppLauncherIcon from "./AppsLauncherIcon";
import Avatar from "./Avatar";

const Header = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-end",
				padding: "8px",
			}}
		>
			<div style={{ display: "flex", gap: "4px" }}>
				<MenuItems title={"Gmail"} />
				<MenuItems title={"Images"} />
				<AppLauncherIcon />
				<Avatar />
			</div>
		</div>
	);
};

export default Header;
