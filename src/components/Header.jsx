/** @format */

import MenuItems from "./MenuItems";
import AppLauncherIcon from "./AppsLauncherIcon";
import Avatar from "./Avatar";

const Header = () => {
	return (
		<div className="page-header-container">
			<div className="header-contents">
				<MenuItems title={"Gmail"} />
				<MenuItems title={"Images"} />
				<AppLauncherIcon />
				<Avatar />
			</div>
		</div>
	);
};

export default Header;
