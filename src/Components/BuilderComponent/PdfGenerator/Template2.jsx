import React from "react";
import { useSelector } from "react-redux";

// This is a functional component called 'Template1'
const Template1 = () => {
	// These lines use the 'useSelector' hook from 'react-redux' to retrieve data from the Redux store
	const input = useSelector((state) => state.inputFields.fields);
	const description = useSelector((state) => state.inputFields.descriptions);
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
	const url = useSelector((state) => state.inputFields.url);

    
	// This is the main return statement of the functional component
	return (
		<>
			<div id="template2" className="font-mono ps-4">
				{/* This section displays the name, designation, contact information, and social media links */}
				<div className="ms-4 flex justify-between">
					<div>
						<p className="text-3xl font-semibold">
							{input["First Name"]} {input["Last Name"]}
						</p>
						<p className="text-xl">{input["Designation"]}</p>
						<p>
							{input["Phone"]} {input["Phone"] && input["Email"] && " | "}
							<i>{input["Email"]}</i>
						</p>
						<ul className="text-xs font-light flex gap-4">
							{social.map((social, index) => (
								<React.Fragment key={index}>
									<li>
										{social.Platform}: <i>{social.Link}</i>
									</li>
								</React.Fragment>
							))}
						</ul>
					</div>
					<div className="me-4 mt-4">
						{url && <img src={url} alt=" " className="w-24 h-24" />}
					</div>
				</div>

				{/* This section displays the personal summary */}
				<div className="border-y-2 my-4">
					<p
						className="text-xs p-4"
						dangerouslySetInnerHTML={{
							__html: description["Personal Summary"],
						}}
					></p>
				</div>

				{/* This section displays the work experience, projects, achievements, and awards */}
				<div className="mt-4 flex">
					<div className="w-1/2 border-s-2 border-zinc-500 border-dashed ps-4">
						{exp.length > 0 && (
							<div>
								<p className="text-xl text-blue-400">WORK EXPERIENCE</p>
								<ul className="text-xs">
									{exp.map((exp, index) => (
										<React.Fragment key={index}>
											<li>
												<strong>{exp.Position}</strong>
											</li>
											<li>
												{exp.Company} | {exp.Started} - {exp.Ended}
											</li>
											<li className="mb-4">
												<p
													dangerouslySetInnerHTML={{ __html: exp.Description }}
												></p>
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}

						{project.length > 0 && (
							<div>
								<p className="text-xl text-blue-400">PROJECT</p>
								<ul className="text-xs">
									{project.map((project, index) => (
										<React.Fragment key={index}>
											<li>
												<strong>{project.Project}</strong>
											</li>
											<li>{project.Link}</li>
											<li className="mb-4">
												<p
													dangerouslySetInnerHTML={{
														__html: project.Description,
													}}
												></p>
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}

						{achievement.length > 0 && (
							<div className="mt-4">
								<p className="text-xl text-blue-400">ACHIEVEMENT</p>
								<ul className="text-xs">
									{achievement.map((achievement, index) => (
										<React.Fragment key={index}>
											<li>
												<strong>{achievement.Achievement}</strong>
											</li>
											<li className="mb-4">
												<p
													dangerouslySetInnerHTML={{
														__html: achievement.Description,
													}}
												></p>
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}

						{award.length > 0 && (
							<div className="mt-4">
								<p className="text-xl text-blue-400">AWARD</p>
								<ul className="text-xs">
									{award.map((award, index) => (
										<React.Fragment key={index}>
											<li>
												<strong>{award.Award}</strong>
											</li>
											<li>{award.Year}</li>
											<li>
												{award.Organization}{" "}
												{award.Organization && award.Location && " | "}{" "}
												{award.Location}
											</li>
											<li className="mb-4">
												<p
													dangerouslySetInnerHTML={{
														__html: award.Description,
													}}
												></p>
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* This section displays the education, training, skills, and languages */}
					<div className=" w-1/2 border-s-2 border-zinc-500 border-dashed ps-4">
						{edu.length > 0 && (
							<div>
								<p className="text-xl text-blue-400">EDUCATION</p>
								<ul className="text-xs">
									{edu.map((edu, index) => (
										<React.Fragment key={index}>
											<li>
												<strong>{edu.School}</strong>
											</li>
											<li className="mb-4">
												{edu.Degree} {edu.Degree && edu.Year && " | "}{" "}
												{edu.Year}
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}

						{training.length > 0 && (
							<div>
								<p className="text-xl text-blue-400">TRAINING</p>
								<ul className="text-xs">
									{training.map((training, index) => (
										<React.Fragment key={index}>
											<li>
												<strong>{training.Training}</strong>
											</li>
											<li>
												{training.Institute}{" "}
												{training.Institute && training.Date && " | "}{" "}
												{training.Date}
											</li>
											<li className="mb-4">
												<p
													dangerouslySetInnerHTML={{
														__html: training.Description,
													}}
												></p>
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}

						{skill.length > 0 && (
							<div>
								<p className="text-xl text-blue-400">SKILL</p>
								<ul className="text-xs mb-4">
									{skill.map((skill, index) => (
										<React.Fragment key={index}>
											<li>
												{skill.Skill} - {skill.Rating <= 2 && "Good"}{" "}
												{skill.Rating <= 4 && skill.Rating > 2 && "Excellent"}{" "}
												{skill.Rating > 4 && "Expert"}
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}

						{language.length > 0 && (
							<div>
								<p className="text-xl text-blue-400">LANGUAGE</p>
								<ul className="text-xs mb-4">
									{language.map((language, index) => (
										<React.Fragment key={index}>
											<li>
												{language.Language} - {language.Proficiency}
											</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}

						{reference.length > 0 && (
							<div>
								<p className="text-xl text-blue-400">REFERENCE</p>
								<ul className="text-xs">
									{reference.map((reference, index) => (
										<React.Fragment key={index}>
											<li>
												<strong>{reference.Name}</strong>
											</li>
											<li>
												{reference.Company} | {reference.Designation}
											</li>
											<li>{reference.Phone}</li>
											<li className="mb-4">{reference.Email}</li>
										</React.Fragment>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Template1;
