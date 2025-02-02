import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";

const Pdf = () => {
	const info = useSelector((state) => state.inputFields.fields);
	const description = useSelector((state) => state.inputFields.descriptions);
	const url = useSelector((state) => state.inputFields.url);
	const social = useSelector((state) => state.inputFields.social);
	const edu = useSelector((state) => state.inputFields.education);
	const exp = useSelector((state) => state.inputFields.experience);
	const project = useSelector((state) => state.inputFields.project);
	const achievement = useSelector((state) => state.inputFields.achievement);
	const training = useSelector((state) => state.inputFields.training);
	const award = useSelector((state) => state.inputFields.award);
	const reference = useSelector((state) => state.inputFields.reference);
	const language = useSelector((state) => state.inputFields.language);
	const skill = useSelector((state) => state.inputFields.skill);
	let name = "";
	let designation = "";

	const [pdf, setPdf] = useState();

	const generateText = (
		info,
		description,
		social,
		edu,
		exp,
		project,
		achievement,
		training,
		award,
		reference,
		language,
		skill
	) => {
		let text = "";

		for (const [key, value] of Object.entries(info)) {
			if (
				key !== value &&
				![
					"First Name",
					"Last Name",
					"Designation",
					"school",
					"year",
					"degree",
					"Company Name",
					"Job Title",
					"Start Date",
					"End date",
					"Project Title",
					"Project Link",
					"Achievement",
					"Achievement Description",
					"Training",
					"Institute",
					"Date",
					"Award Title",
					"Organization",
					"Award Location",
					"Year",
					"Name",
					"Company",
					"Reference Designation",
					"Reference Phone",
					"Reference Email",
					"Language",
					"Skill",
				].includes(key)
			) {
				text += `${key}: ${value}\n`;
			}
		}

		// for (const [key, value] of Object.entries(description)) {
		// 	text += `${key}: ${value}\n`;
		// }

		for (const obj of social) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}

		for (const obj of edu) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}
		for (const obj of exp) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}
		for (const obj of project) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}

		for (const obj of achievement) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}

		for (const obj of training) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}
		for (const obj of award) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}
		for (const obj of reference) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}
		for (const obj of language) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}
		for (const obj of skill) {
			const value = Object.entries(obj);
			for (let i = 0; i <= value.length - 1; i++) {
				text += `${value[i][0]}: ${value[i][1]}\n`;
			}
		}
		return text;
	};

	// const getDescription = (description) => {
	// 	let des = "";
	// 	for (const [key, value] of Object.entries(description)) {
	// 		des += `${value}`;
	// 	}

	// 	return des;
	// };

	let des = "";
	for (const [key, value] of Object.entries(description)) {
		des += `${value}`;
	}

	useEffect(() => {
		if (info && Object.keys(info).length > 0) {
			const doc = new jsPDF();

			const text = generateText(
				info,
				description,
				social,
				edu,
				exp,
				project,
				achievement,
				training,
				award,
				reference,
				language,
				skill
			);
			// const des = getDescription(description)

			// Set the page background color (RGB format)
			doc.setFillColor(217, 217, 217); // Light red color (RGB)

			// Fill the entire page with the color (coordinates 0, 0, page width, page height)
			doc.rect(
				0,
				0,
				doc.internal.pageSize.width,
				doc.internal.pageSize.height,
				"F"
			);
			// Rectangle on top
			doc.setFillColor(84, 84, 84);
			doc.rect(70, 60, doc.internal.pageSize.width, 60, "F");
			// Rectangle on bottom
			doc.setFillColor(84, 84, 84);
			doc.rect(
				doc.internal.pageSize.width - 80,
				doc.internal.pageSize.height - 20,
				80,
				20,
				"F"
			);

			for (const [key, value] of Object.entries(info)) {
				if (key === "First Name") {
					name += value;
					name += " ";
				}
				if (key === "Last Name") {
					name += value;
				}
				if (key === "Designation") {
					designation += value;
				}
			}

			if (url) {
				doc.addImage(url, 20, 30, 60, 100);
			}

			doc.setFontSize(12);
			doc.text(text, 10, 10);
			doc.setFontSize(40);
			doc.setFont("Helvetica", "bold");
			doc.setTextColor(0, 0, 0);
			doc.text(name, 90, 40);
			doc.setFont("Helvetica", "normal");
			doc.setFontSize(30);
			doc.text(designation, 90, 50);
			doc.setTextColor(255, 255, 255);
			doc.setFont("Helvetica", "bold");
			doc.setFontSize(25);
			doc.text("PROFILE", 90, 80);
			doc.setFontSize(12);
			doc.text(des, 90, 90);

			const pdfData = doc.output("blob");
			const pdfUrl = URL.createObjectURL(pdfData);
			setPdf(pdfUrl);

			// doc.html(des, {
			// 	callback: function(doc) {
			// 		doc.setFontSize(10)
			// 		const pdfData = doc.output("blob")
			// 		const pdfUrl = URL.createObjectURL(pdfData)
			// 		setPdf(pdfUrl)
			// 	},
			// 	x: 10,
			// 	y: 10
			// })
		}
	}, [
		info,
		description,
		url,
		social,
		edu,
		exp,
		project,
		achievement,
		training,
		award,
		reference,
		language,
		skill,
	]);

	return (
		<div className="w-full h-full">
			{pdf ? (
				<iframe
					src={pdf}
					className="w-full h-full"
					title="Generated PDF"
					style={{ border: "none" }}
				/>
			) : (
				""
			)}
		</div>
	);
};

export default Pdf;
