import * as React from "react";

function SvgVectorCard(props) {
	return (
		<svg
			fill="none"
			height={10}
			width={16}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M7.03 5.3v-.294c0-1.227.071-2.345.18-3.074l.094-.453c.053-.24.122-.513.194-.653C7.763.316 8.28 0 8.834 0h.048C9.242.012 10 .329 10 .34c1.22.512 3.574 2.056 4.66 3.158l.317.33c.082.09.175.196.233.279.193.255.289.57.289.887 0 .352-.108.68-.313.948l-.324.35-.073.075c-.986 1.07-3.562 2.818-4.909 3.353l-.203.078c-.245.088-.588.192-.796.202-.265 0-.517-.062-.758-.183-.301-.17-.541-.438-.674-.753-.084-.219-.217-.875-.217-.887-.122-.662-.192-1.706-.203-2.876ZM.5 5c0-.699.56-1.265 1.253-1.265l3.082.272c.543 0 .983.445.983.993 0 .549-.44.992-.983.992l-3.082.273A1.259 1.259 0 0 1 .5 5Z"
				fill="#6684FF"
			/>
		</svg>
	);
}

export default SvgVectorCard;