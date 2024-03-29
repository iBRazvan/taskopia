import { Chip } from "@mui/material/";
import { alpha, styled } from "@mui/material/styles";

const StyledChip = styled(Chip, {
	shouldForwardProp: (prop) => prop !== "extraColor",
})(({ extraColor, theme }) => {
	/*
		Checking if extraColor is one of the main palette 
		or if it is found in the custom colors,
		fallback in default color
	*/
	const customColor =
		extraColor && theme.palette[extraColor]
			? theme.palette[extraColor].main
			: theme.palette.custom[extraColor] || theme.palette.default.main;
	return {
		"&.MuiChip-root": {
			fontWeight: 500,
		},
		"&.MuiChip-outlined": {
			background: alpha(customColor, 0.1),
			color: customColor,
			border: "none",
		},
		"& .MuiChip-labelSmall": {
			fontSize: 12,
			paddingLeft: 10,
			paddingRight: 10,
		},
	};
});

export default StyledChip;
