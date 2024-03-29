import React from "react";

import BugReportIcon from "@mui/icons-material/BugReport";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";

import {
	OverviewFilled,
	OverviewStroke,
	SettingsFilled,
	SettingsStroke,
	TasksFilled,
	TasksStroke,
} from "../../assets/icons";

 const sideBarLinks = [
	{
		label: "Overview",
		icon: { base: <OverviewStroke/>, selected: <OverviewFilled /> },
		link: "/overview",
	},
	{
		label: "Tasks",
		icon: { base: <TasksStroke />, selected: <TasksFilled /> },
		link: "/tasks-board",
	},
	{
		label: "Settings",
		icon: { base: <SettingsStroke />, selected: <SettingsFilled /> },
		link: "/settings",
	},

];

export default sideBarLinks