import React from "react";
import { useSelector } from "react-redux";
import {
	CompanyIcon,
	DesignationIcon,
	FacebookIcon,
	GithubIcon,
	HumanIcon,
	LinkedinIcon,
	LocationIcon,
	MailIcon,
	PhoneIcon,
	TwitterIcon,
	WebIcon,
} from "../../Icons";

// This is a React functional component called 'Template1'
const Template1 = () => {
	// The component uses the 'useSelector' hook from 'react-redux' to retrieve data from the Redux store
	const input = useSelector((state) => state.inputFields.fields);
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

	// The component creates an 'info' object that contains various information about the user
	const info = {
		name: `${input["First Name"] || "John"} ${input["Last Name"] || "Carter"}`,
		designation: input["Designation"] || "CEO",
		address: input["Address"] || "123 Street",
		city: input["City"] || "London",
		email: input["Email"] || "john@email.com",
		phone: input["Phone"] || "123-456-7890",
		personal:
			description["Personal Summary"] ||
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis quam qui labore velit inventore possimus illo fugiat enim exercitationem consequuntur aperiam maiores voluptates neque voluptas, aliquid deleniti aliquam eaque.",
		education: edu || [],
		experience: exp || [],
		projects: project || [],
		achievements: achievement || [],
		training: training || [],
		awards: award || [],
		references: reference || [],
		languages: language || [],
		skills: skill || [],
	};

	// The component returns JSX that renders the template
	return (
		<>
			<div className="flex" id="template1">
				{/* Left Sidebar */}
				<div className="w-2/5 bg-slate-800 text-white p-6 left-side">
					{/* Profile Image */}
					<div className="mb-6">
						{url && (
							<img
								src={url}
								alt="Profile"
								className="w-40 h-40 rounded-full mx-auto"
							/>
						)}
					</div>
					{/* Personal Info */}
					<div className="mb-6">
						<h2 className="text-sm font-semibold">PERSONAL INFO</h2>
						<ul className="text-xs list-none space-y-2 py-4">
							<li className="flex align-middle items-center gap-2">
								<HumanIcon color="white" />
								{info.name}
							</li>
							<li className="flex align-middle items-center gap-2">
								<LocationIcon color="white" />
								{info.address + ", " + info.city}
							</li>
							<li className="flex align-middle items-center gap-2">
								<PhoneIcon color="white" />
								{info.phone}
							</li>
							<li className="flex align-middle items-center gap-2">
								<MailIcon color="white" />
								{info.email}
							</li>
						</ul>
					</div>
					{/* Social Media */}
					<div className="mb-6">
						<h2 className="text-sm font-semibold">Social Media</h2>
						<ul className="text-xs list-none py-4 space-y-2">
							{social.map((social, index) => (
								<li
									key={index}
									className="flex align-middle items-center gap-2"
								>
									{/* Render the appropriate social media icon based on the platform */}
									{social.Platform === "Facebook" && (
										<FacebookIcon color="white" size="h-6 w-4" />
									)}
									{social.Platform === "Twitter" && (
										<TwitterIcon color="white" size="h-6 w-4" />
									)}
									{social.Platform === "Linkedin" && (
										<LinkedinIcon color="white" size="h-6 w-4" />
									)}
									{social.Platform === "Github" && (
										<GithubIcon color="white" size="h-6 w-4" />
									)}
									{social.Link}
								</li>
							))}
						</ul>
					</div>
					{/* Professional Skills */}
					<div className="mb-6">
						<h2 className="text-sm font-semibold">PROFESSIONAL SKILLS</h2>
						<ul className="text-xs list-none space-y-2 py-4">
							{skill.map((skill, index) => (
								<li key={index}>
									{skill.Skill}
									<div className="flex gap-1 text-xl">
										{/* Render the appropriate number of star icons based on the skill rating */}
										{[1, 2, 3, 4, 5].map((star) => (
											<span
												key={star}
												className={`${
													star <= skill.Rating
														? "text-yellow-500"
														: "text-gray-400"
												}`}
											>
												★
											</span>
										))}
									</div>
								</li>
							))}
						</ul>
					</div>
					{/* Reference */}
					<div className="mb-6">
						<h2 className="text-sm font-semibold">REFERENCE</h2>
						<ul className="text-xs list-none space-y-2 py-2">
							{reference.map((reference, index) => (
								<li key={index}>
									{Object.entries(reference).map(([key, value], subIndex) => (
										<li
											key={subIndex}
											className="flex items-center align-middle gap-2 py-1"
										>
											{/* Render the appropriate icon based on the reference field */}
											{key === "Name" && <HumanIcon color="white" />}
											{key === "Company" && <CompanyIcon color="white" />}
											{key === "Designation" && (
												<DesignationIcon color="white" />
											)}
											{key === "Phone" && <PhoneIcon color="white" />}
											{key === "Email" && <MailIcon color="white" />}
											{value}
										</li>
									))}
								</li>
							))}
						</ul>
					</div>
					{/* Language */}
					<div>
						<h2 className="text-sm font-semibold">LANGUAGE</h2>
						<ul className="text-xs list-none space-y-2 py-2">
							{language.map((language, index) => (
								<li
									key={index}
									className="flex gap-2 align-middle items-center"
								>
									<WebIcon color="white" />
									{language.Language}
									<span className="text-sm">
										<i>{language.Proficiency}</i>
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Main Content */}
				<div className="w-3/4 p-6">
					<div className="mb-6">
						<h1 className="text-2xl font-bold">{info.name}</h1>
						<p className="text-base text-gray-600">{info.designation}</p>
					</div>
					<div className="text-xs mb-6 text-gray-700 border-t-2 py-2">
						<p dangerouslySetInnerHTML={{ __html: info.personal }}></p>
					</div>

					{/* Education Section */}
					{edu.length > 0 && (
						<div className="mb-6">
							<h2 className="text-lg font-semibold px-4 border-2">Education</h2>
							<table className="min-w-full mt-2 text-xs">
								<tbody>
									{edu.map((info, index) => (
										<React.Fragment key={index}>
											<tr>
												<td className="px-4">{info.Year}</td>
												<td className="px-4 py-1">
													<strong>{info.School}</strong>
												</td>
											</tr>
											<tr>
												<td className="px-4 py-1"></td>
												<td className="px-4 py-1 text-gray-500">
													{info.Degree}
												</td>
											</tr>
										</React.Fragment>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* Work Experience Section */}
					{exp.length > 0 && (
						<div className="mb-6">
							<h2 className="text-lg font-semibold border-2 px-4">
								Work Experience
							</h2>
							<table className="min-w-full mt-2 text-xs">
								<tbody>
									{exp.map((info, index) => (
										<React.Fragment key={index}>
											<tr>
												<td className="px-4 py-1">
													{info.Started} - {info.Ended}
												</td>
												<td className="px-4 py-1">
													<strong>{info.Company}</strong>
												</td>
											</tr>
											<tr>
												<td className="px-4"></td>
												<td className="px-4 text-gray-500">
													<p
														dangerouslySetInnerHTML={{
															__html: info.Description,
														}}
													></p>
												</td>
											</tr>
										</React.Fragment>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* Project Section */}
					{project.length > 0 && (
						<div className="mb-6">
							<h2 className="text-lg font-semibold border-2 px-4">Projects</h2>
							<table className="text-xs min-w-full mt-2">
								<tbody>
									{project.map((info, index) => (
										<React.Fragment key={index}>
											<tr>
												<td className="px-4 py-1">{info.Link}</td>
												<td className="px-4 py-1">
													<strong>{info.Project}</strong>
												</td>
											</tr>
											<tr>
												<td className="px-4 py-1"></td>
												<td className="px-4 py-1 text-gray-500">
													<p
														dangerouslySetInnerHTML={{
															__html: info.Description,
														}}
													></p>
												</td>
											</tr>
										</React.Fragment>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* Achievements Section */}
					{achievement.length > 0 && (
						<div className="mb-6">
							<h2 className="text-lg font-semibold border-2 px-4">
								Achievements
							</h2>
							<table className="text-xs min-w-full mt-2">
								<tbody>
									{achievement.map((info, index) => (
										<React.Fragment key={index}>
											<tr>
												<td className="px-4 py-1">
													<strong>{info.Achievement}</strong>
												</td>
												<td className="px-4 py-1 text-gray-500">
													<p
														dangerouslySetInnerHTML={{
															__html: info.Description,
														}}
													></p>
												</td>
											</tr>
										</React.Fragment>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* Training Section */}
					{training.length > 0 && (
						<div className="mb-6">
							<h2 className="text-lg font-semibold border-2 px-4">Trainings</h2>
							<table className="text-xs min-w-full mt-2">
								<tbody>
									{training.map((info, index) => (
										<React.Fragment key={index}>
											<tr>
												<td className="px-4 py-1">{info.Date}</td>
												<td className="px-4 py-1">
													<strong>{info.Training}</strong>
												</td>
											</tr>
											<tr>
												<td className="px-4 py-1"></td>
												<td className="px-4 py-1 text-gray-500">
													<p>{info.Institute}</p>
													<p
														dangerouslySetInnerHTML={{
															__html: info.Description,
														}}
													></p>
												</td>
											</tr>
										</React.Fragment>
									))}
								</tbody>
							</table>
						</div>
					)}

					{/* Awards Section */}
					{award.length > 0 && (
						<div className="mb-6">
							<h2 className="text-lg font-semibold border-2 px-4">Awards</h2>
							<table className="text-lg min-w-full mt-2">
								<tbody>
									{award.map((info, index) => (
										<React.Fragment key={index}>
											<tr>
												<td className="px-4 py-1">{info.Year}</td>
												<td className="px-4 py-1">
													<strong>{info.Award}</strong>
												</td>
											</tr>
											<tr>
												<td className="px-4 py-1"></td>
												<td className="px-4 py-1 text-gray-500">
													<i>
														<p>
															{info.Organization}, {info.Location}
														</p>
													</i>
													<p
														dangerouslySetInnerHTML={{
															__html: info.Description.trim(),
														}}
													></p>
												</td>
											</tr>
										</React.Fragment>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Template1;
