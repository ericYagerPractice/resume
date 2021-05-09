/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
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
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        email
        location
        jobTitle
        overview
        experience {
          nextToken
        }
        education {
          nextToken
        }
        skills {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
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
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: ModelExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
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
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      title
      type
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
