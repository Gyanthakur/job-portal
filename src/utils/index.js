import qs from "query-string";

export const recruiterOnboardFormControls = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    componentType: "input",
  },
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Enter your company name",
    componentType: "input",
  },
  {
    label: "Company Role",
    name: "companyRole",
    placeholder: "Enter your company role",
    componentType: "input",
  },
];

export const initialRecruiterFormData = {
  name: "",
  companyName: "",
  companyRole: "",
};

export const candidateOnboardFormControls = [
  {
    label: "Resume",
    name: "resume",
    componentType: "file",
  },
  {
    label: "Name",
    name: "name",
    placeholder: "Enter your name",
    componentType: "input",
  },
  {
    label: "Current Company",
    name: "currentCompany",
    placeholder: "Enter your current company",
    componentType: "input",
  },
  {
    label: "Current Job Location",
    name: "currentJobLocation",
    placeholder: "Enter your current job location",
    componentType: "input",
  },
  {
    label: "Prefered Job Location",
    name: "preferedJobLocation",
    placeholder: "Enter your prefered job location",
    componentType: "input",
  },
  {
    label: "Current Salary",
    name: "currentSalary",
    placeholder: "Enter your current salary",
    componentType: "input",
  },
  {
    label: "Notice Period",
    name: "noticePeriod",
    placeholder: "Enter your notice period",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "Enter your skills",
    componentType: "input",
  },
  {
    label: "Previous Companies",
    name: "previousCompanies",
    placeholder: "Enter your previous companies",
    componentType: "input",
  },
  {
    label: "Total Experience",
    name: "totalExperience",
    placeholder: "Enter your total experience",
    componentType: "input",
  },
  {
    label: "College",
    name: "college",
    placeholder: "Enter your college",
    componentType: "input",
  },
  {
    label: "College Location",
    name: "collegeLocation",
    placeholder: "Enter your college location",
    componentType: "input",
  },
  {
    label: "Graduated Year",
    name: "graduatedYear",
    placeholder: "Enter your graduated year",
    componentType: "input",
  },
  {
    label: "Linkedin Profile",
    name: "linkedinProfile",
    placeholder: "Enter your linkedin profile",
    componentType: "input",
  },
  {
    label: "Github Profile",
    name: "githubProfile",
    placeholder: "Enter your github profile",
    componentType: "input",
  },
];

export const initialCandidateFormData = {
  resume: "",
  name: "",
  currentJobLocation: "",
  preferedJobLocation: "",
  currentSalary: "",
  noticePeriod: "",
  skills: "",
  currentCompany: "",
  previousCompanies: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedinProfile: "",
  githubProfile: "",
};

export const initialCandidateAccountFormData = {
  name: "",
  currentJobLocation: "",
  preferedJobLocation: "",
  currentSalary: "",
  noticePeriod: "",
  skills: "",
  currentCompany: "",
  previousCompanies: "",
  totalExperience: "",
  college: "",
  collegeLocation: "",
  graduatedYear: "",
  linkedinProfile: "",
  githubProfile: "",
};

export const postNewJobFormControls = [
  {
    label: "Company Name",
    name: "companyName",
    placeholder: "Company Name",
    componentType: "input",
    disabled: true,
  },
  {
    label: "Title",
    name: "title",
    placeholder: "Job Title",
    componentType: "input",
  },
  {
    label: "Type",
    name: "type",
    placeholder: "Job Type",
    componentType: "input",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Job Location",
    componentType: "input",
  },
  {
    label: "Experience",
    name: "experience",
    placeholder: "Experience",
    componentType: "input",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "Description",
    componentType: "input",
  },
  {
    label: "Skills",
    name: "skills",
    placeholder: "Skills",
    componentType: "input",
  },
];

export const initialPostNewJobFormData = {
  companyName: "",
  title: "",
  type: "",
  location: "",
  experience: "",
  description: "",
  skills: "",
};

export const filterMenuDataArray = [
  {
    id: "companyName",
    label: "Company Name",
  },
  {
    id: "title",
    label: "Title",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "location",
    label: "Location",
  },
];

export function formUrlQuery({ params, dataToAdd }) {
  let currentURL = qs.parse(params);

  if (Object.keys(dataToAdd).length > 0) {
    Object.keys(dataToAdd).map((key) => {
      if (dataToAdd[key].length === 0) delete currentURL[key];
      else currentURL[key] = dataToAdd[key].join(",");
    });
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentURL,
    },
    {
      skipNull: true,
    }
  );
}

export const membershipPlans = [
  {
    heading: "Tier 1",
    price: 100,
    type: "basic",
  },
  {
    heading: "Tier 2",
    price: 1000,
    type: "teams",
  },
  {
    heading: "Tier 3",
    price: 5000,
    type: "enterprise",
  },
];



export const haclkathonOnboardFormControls = [
	{
		label: "Name",
		name: "name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Hackathon Name",
		name: "hackathonName",
		placeholder: "Enter your Hackathon name",
		componentType: "input",
	},
	{
		label: "Date and Time",
		name: "dateTime",
		placeholder: "Select the start and end date and time",
		componentType: "datetime",
	},
	{
		label: "Venue",
		name: "venue",
		placeholder: "Enter the location or online platform details",
		componentType: "input",
	},
	{
		label: "Organizers",
		name: "organizers",
		placeholder: "Enter the names and affiliations of the organizers",
		componentType: "textarea",
	},
	{
		label: "Registration Link",
		name: "registrationLink",
		placeholder: "Enter the registration link",
		componentType: "input",
	},
	{
		label: "Eligibility Criteria",
		name: "eligibilityCriteria",
		placeholder: "Enter the eligibility criteria",
		componentType: "textarea",
	},
	{
		label: "Team Formation",
		name: "teamFormation",
		placeholder: "Describe the team formation rules",
		componentType: "textarea",
	},
	{
		label: "Themes and Challenges",
		name: "themesChallenges",
		placeholder: "Describe the themes and challenges",
		componentType: "textarea",
	},
	{
		label: "Event Schedule",
		name: "eventSchedule",
		placeholder: "Enter the detailed event schedule",
		componentType: "textarea",
	},
	{
		label: "Tools and Technologies",
		name: "eoolsTechnologies",
		placeholder: "List the recommended or required tools and technologies",
		componentType: "textarea",
	},
	{
		label: "Code of Conduct",
		name: "codeConduct",
		placeholder: "Describe the code of conduct",
		componentType: "textarea",
	},
	{
		label: "Submission Requirements",
		name: "submissionRequirements",
		placeholder: "Describe the submission requirements",
		componentType: "textarea",
	},
	{
		label: "Judging Criteria",
		name: "judgingCriteria",
		placeholder: "Describe the judging criteria",
		componentType: "textarea",
	},
	{
		label: "Prizes",
		name: "prizes",
		placeholder: "Describe the prizes for winners and other categories",
		componentType: "textarea",
	},
	{
		label: "Mentorship",
		name: "mentorship",
		placeholder: "Describe the availability of mentors",
		componentType: "textarea",
	},
	{
		label: "Workshops",
		name: "workshops",
		placeholder: "Describe any workshops during the event",
		componentType: "textarea",
	},
	{
		label: "Resources",
		name: "resources",
		placeholder: "List the resources available to participants",
		componentType: "textarea",
	},
	{
		label: "Contact Information",
		name: "contactInformation",
		placeholder: "Enter contact information for inquiries",
		componentType: "input",
	},
	{
		label: "FAQs",
		name: "fAQs",
		placeholder: "Provide answers to common questions",
		componentType: "textarea",
	},
	{
		label: "Social Media and Community Links",
		name: "socialMediaLinks",
		placeholder: "Provide links to social media and community channels",
		componentType: "textarea",
	},
	{
		label: "Intellectual Property Guidelines",
		name: "intellectualProperty",
		placeholder: "Describe the intellectual property guidelines",
		componentType: "textarea",
	},
	{
		label: "Privacy Policy",
		name: "privacyPolicy",
		placeholder: "Describe the privacy policy",
		componentType: "textarea",
	},
];

export const initialHackathonFormData = {
	name: "",
	hackathonName: "",
	date: "",
};

export const othersOnboardFormControls = [
	{
		label: "Name",
		name: "name",
		placeholder: "Enter your name",
		componentType: "input",
	},
	{
		label: "Title",
		name: "title",
		placeholder: "Enter the title",
		componentType: "input",
	},
	{
		label: "Description",
		name: "description",
		placeholder: "Enter the description",
		componentType: "textarea",
	},
	{
		label: "Link",
		name: "link",
		placeholder: "Enter the link",
		componentType: "input",
	},
];

export const initialOthersFormData = {
	name: "",
	title: "",
	description: "",
	link: "",
};
