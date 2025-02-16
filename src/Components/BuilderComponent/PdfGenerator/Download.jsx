import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { useSelector } from "react-redux";

// This is a functional component called 'Download'
// It takes a 'handleTemplateSelect' prop which is a function
const Download = ({ handleTemplateSelect }) => {
	// This line uses the 'useSelector' hook from 'react-redux' to get the 'fields' object from the Redux store
	const info = useSelector((state) => state.inputFields.fields);

	// These lines extract the 'First Name' and 'Last Name' values from the 'info' object, or use default values if they are not present
	const firstName = info["First Name"] || "John";
	const lastName = info["Last Name"] || " Carter";
	let name = firstName + " " + lastName;
	const [template, setTemplate] = useState(""); // useState to track selected template

	// This is a function that is called when the 'Download PDF' button is clicked
	const handleDownload = (template) => {
		// These lines get references to the two HTML elements that represent the templates
		const template1 = document.getElementById("template1");
		const template2 = document.getElementById("template2");
		const template3 = document.getElementById("template3")

		// This object contains the options for the PDF generation
		const options = {
			filename: name + ".pdf",
			image: { type: "jpeg", quality: 1 },
			html2canvas: {
				dpi: 300,
				scale: 4,
				useCORS: true,
				letterRendering: true,
			},
			jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
		};

		let selectedTemplate = ""

		if (template === "template1") {
			selectedTemplate = template1
		}
		if (template === "template2") {
			selectedTemplate = template2
		}


		// This line generates the PDF using the 'html2pdf' library and the specified options
		html2pdf(selectedTemplate, options);
	};

	return (
		<div>
			{/* This section displays two clickable elements that allow the user to select a template */}
			<div className="w-40">
				<div
					onClick={() => {
						handleTemplateSelect("template1");
						setTemplate("template1");
					}}
					className="p-4 cursor-pointer w-auto"
				>
						<img
							src={`${process.env.PUBLIC_URL}/Dummy/template1.png`}
							alt=" "
							className="w-40 h-40"
						/>
				</div>

				<div
					onClick={() => {
						handleTemplateSelect("template2");
						setTemplate("template2");
					}}
					className="p-4 cursor-pointer"
				>
						<img src={`${process.env.PUBLIC_URL}/Dummy/template2.png`} alt=" " className="w-40 h-40"/>
				</div>
			</div>

			{/* This is a button that, when clicked, calls the 'handleDownload' function to generate the PDF */}
			<button
				onClick={() => handleDownload(template)} // Pass the current template state to the function
				className="bg-primary-color text-white px-4 py-2 rounded mt-4 hover:bg-secondary-color"
			>
				Download PDF
			</button>
		</div>
	);
};

export default Download;
