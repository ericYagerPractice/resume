/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResume = /* GraphQL */ `
  mutation CreateResume(
    $input: CreateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    createResume(input: $input, condition: $condition) {
      id
      type
      email
      location
      jobTitle
      overview
      experience {
        items {
          id
          company
          startDate
          endDate
          location
          overview
          bullets
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      education {
        items {
          id
          school
          degree
          startDate
          endDate
          location
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          title
          type
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateResume = /* GraphQL */ `
  mutation UpdateResume(
    $input: UpdateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    updateResume(input: $input, condition: $condition) {
      id
      type
      email
      location
      jobTitle
      overview
      experience {
        items {
          id
          company
          startDate
          endDate
          location
          overview
          bullets
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      education {
        items {
          id
          school
          degree
          startDate
          endDate
          location
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          title
          type
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteResume = /* GraphQL */ `
  mutation DeleteResume(
    $input: DeleteResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    deleteResume(input: $input, condition: $condition) {
      id
      type
      email
      location
      jobTitle
      overview
      experience {
        items {
          id
          company
          startDate
          endDate
          location
          overview
          bullets
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      education {
        items {
          id
          school
          degree
          startDate
          endDate
          location
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      skills {
        items {
          id
          title
          type
          ResumeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createExperience = /* GraphQL */ `
  mutation CreateExperience(
    $input: CreateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    createExperience(input: $input, condition: $condition) {
      id
      company
      startDate
      endDate
      location
      overview
      bullets
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience(
    $input: UpdateExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    updateExperience(input: $input, condition: $condition) {
      id
      company
      startDate
      endDate
      location
      overview
      bullets
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience(
    $input: DeleteExperienceInput!
    $condition: ModelExperienceConditionInput
  ) {
    deleteExperience(input: $input, condition: $condition) {
      id
      company
      startDate
      endDate
      location
      overview
      bullets
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $input: CreateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    createEducation(input: $input, condition: $condition) {
      id
      school
      degree
      startDate
      endDate
      location
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $input: UpdateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    updateEducation(input: $input, condition: $condition) {
      id
      school
      degree
      startDate
      endDate
      location
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $input: DeleteEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    deleteEducation(input: $input, condition: $condition) {
      id
      school
      degree
      startDate
      endDate
      location
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
      id
      title
      type
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
      id
      title
      type
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
      id
      title
      type
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
