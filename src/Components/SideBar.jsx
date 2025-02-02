import React from "react";
import {
	AwardIcon,
	BookIcon,
	ChartIcon,
	LanguageIcon,
	PencilIcon,
	PersonIcon,
	ReferenceIcon,
	ShareIcon,
	SlackIcon,
	TrainingIcon,
	TrophyIcon,
} from "./Icons";

// The SideBar component is a functional component that renders a sidebar with various icons
// The component takes a handleComponentSelect function as a prop, which is used to handle the selection of different components
const SideBar = ({ handleComponentSelect }) => {
	return (
		<div className="h-screen border-e-2 border-secondary-color w-24 flex flex-col justify-center items-center">
			<ul className="space-y-3">
				{/* Each list item represents a different component that can be selected */}
				<li
					className="li-style"
					onClick={() => handleComponentSelect("personal")}
				>
					<PersonIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("education")}
				>
					<BookIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("experience")}
				>
					<ChartIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("projects")}
				>
					<PencilIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("skills")}
				>
					<SlackIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("achievements")}
				>
					<TrophyIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("training")}
				>
					<TrainingIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("awards")}
				>
					<AwardIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("references")}
				>
					<ReferenceIcon />
				</li>
				<li
					className="li-style"
					onClick={() => handleComponentSelect("languages")}
				>
					<LanguageIcon />
				</li>
				<li className="li-style" onClick={() => handleComponentSelect("share")}>
					<ShareIcon />
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
