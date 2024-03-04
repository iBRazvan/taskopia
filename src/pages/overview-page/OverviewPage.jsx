import React from "react";

import { Box } from "@mui/material";

import withNavigationDrawer  from "../../components/navigation-drawer/withNavigationDrawer";
import { GlobalSearchBar } from "../../components/shared";

import QuoteOfTheDay from "./components/QuoteOfTheDay";
import OverviewAction from "./components/OverviewAction";

function OverviewPage() {
	return (
		<Box
			sx={{
				background: (t) => t.palette.background.surface,
				margin: "0 0 6rem 0"
			}}
		>
			<GlobalSearchBar />
			<QuoteOfTheDay />
			<OverviewAction/>
		</Box>
	);
}

export default withNavigationDrawer(OverviewPage);
