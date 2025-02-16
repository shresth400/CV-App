import React from "react";
import { useSelector } from "react-redux";

const Template3 = () => {
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

	return (
		<div className="font-sans p-8 bg-white" id="template3">
			
		</div>
	);
};

export default Template3;
