import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import { Personal } from "../Components/BuilderComponent/Personal";
import { Education } from "../Components/BuilderComponent/Education";
import { Experience } from "../Components/BuilderComponent/Experience";
import { Projects } from "../Components/BuilderComponent/Projects";
import { Skills } from "../Components/BuilderComponent/Skills";
import { Achievements } from "../Components/BuilderComponent/Achievements";
import { Training } from "../Components/BuilderComponent/Training";
import { Awards } from "../Components/BuilderComponent/Awards";
import { References } from "../Components/BuilderComponent/Reference";
import { Languages } from "../Components/BuilderComponent/Language";
import Download from "../Components/BuilderComponent/PdfGenerator/Download";
import Template1 from "../Components/BuilderComponent/PdfGenerator/Template1";
import Template2 from "../Components/BuilderComponent/PdfGenerator/Template2";

// The HomePage component is the main component that renders the entire application
const HomePage = () => {
	// The selectedComponent state variable keeps track of the currently selected component
	// The selectedTemplate state variable keeps track of the currently selected template
	const [selectedComponent, setSelectedComponent] = useState("personal");
	const [selectedTemplate, setSelectedTemplate] = useState("template1");

	// The handleComponentSelect function is called when the user selects a component from the sidebar
	// It updates the selectedComponent state variable with the selected component
	const handleComponentSelect = (component) => {
		setSelectedComponent(component);
	};

	// The handleTemplateSelect function is called when the user selects a template from the Download component
	// It updates the selectedTemplate state variable with the selected template
	const handleTemplateSelect = (template) => {
		setSelectedTemplate(template);
	};

	return (
		<>
			<div className="z-10">
				<Header />
			</div>
			<div className="flex mx-auto">
				{/* Sidebar section */}
				<div>
					<SideBar handleComponentSelect={handleComponentSelect} />
				</div>

				{/* Main content section */}
				<div className="flex flex-col h-screen overflow-scroll md:flex md:flex-row">
					<div className="flex-1 w-screen p-10 h-3/5 order-2 overflow-y-scroll  border-2 border-t-primary-color md:border-none md:h-screen md:w-96 md:order-1">
						{/* Conditionally render the selected component */}
						{selectedComponent === "personal" && <Personal />}
						{selectedComponent === "education" && <Education />}
						{selectedComponent === "experience" && <Experience />}
						{selectedComponent === "projects" && <Projects />}
						{selectedComponent === "skills" && <Skills />}
						{selectedComponent === "achievements" && <Achievements />}
						{selectedComponent === "training" && <Training />}
						{selectedComponent === "awards" && <Awards />}
						{selectedComponent === "references" && <References />}
						{selectedComponent === "languages" && <Languages />}
						{selectedComponent === "share" && (
							<Download handleTemplateSelect={handleTemplateSelect} />
						)}
					</div>

					{/* PDF section */}
					<div className="flex-1 w-screen h-2/5 order-1 overflow-y-scroll md:h-screen md:order-2">
						{/* Conditionally render the selected template */}
						{selectedTemplate === "template1" && <Template1 />}
						{selectedTemplate === "template2" && <Template2 />}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
