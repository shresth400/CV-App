import { createSlice } from "@reduxjs/toolkit";

// Initial state for the input fields
const initialState = {
	url: "",
	fields: {},
	descriptions: {},
	social: [],
	education: [],
	experience: [],
	project: [],
	skill: [],
	achievement: [],
	training: [],
	award: [],
	reference: [],
	language: [],
};

// Create a slice to manage input field values
const inputFieldsSlice = createSlice({
	name: "inputFields",
	initialState,
	reducers: {
		// Action to set the photo URL
		setPhoto: (state, action) => {
			const { url } = action.payload;
			state.url = url;
		},

		// Action to set the value of an input field
		setInputValue: (state, action) => {
			const { id, value } = action.payload;
			state.fields[id] = value;
		},

		// Action to set the description for a field
		setDescription: (state, action) => {
			const { description, content } = action.payload;
			state.descriptions[description] = content;
		},

		// Action to set the social links
		setSocial: (state, action) => {
			const link = action.payload;
			state.social = link;
		},
		// Action to set the education list
		setEducationList: (state, action) => {
			const edu = action.payload;
			state.education = edu;
		},
		// Action to set the experience list
		setExperienceList: (state, action) => {
			const exp = action.payload;
			state.experience = exp;
		},
		// Action to set the project list
		setProjectList: (state, action) => {
			const project = action.payload;
			state.project = project;
		},
		// Action to set the skill list
		setSkillList: (state, action) => {
			const skill = action.payload;
			state.skill = skill;
		},
		// Action to set the achievement list
		setAchievementList: (state, action) => {
			const achievement = action.payload;
			state.achievement = achievement;
		},
		// Action to set the training list
		setTrainingList: (state, action) => {
			const training = action.payload;
			state.training = training;
		},
		// Action to set the award list
		setAwardList: (state, action) => {
			const award = action.payload;
			state.award = award;
		},
		// Action to set the reference list
		setReferenceList: (state, action) => {
			const reference = action.payload;
			state.reference = reference;
		},
		// Action to set the language list
		setLanguageList: (state, action) => {
			const language = action.payload;
			state.language = language;
		},
	},
});

// Actions exported for use in components
export const {
	setInputValue,
	setDescription,
	setPhoto,
	setSocial,
	setEducationList,
	setExperienceList,
	setProjectList,
	setSkillList,
	setAchievementList,
	setTrainingList,
	setAwardList,
	setReferenceList,
	setLanguageList,
} = inputFieldsSlice.actions;

export default inputFieldsSlice.reducer;