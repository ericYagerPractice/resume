/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResume = /* GraphQL */ `
  subscription OnCreateResume {
    onCreateResume {
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
export const onUpdateResume = /* GraphQL */ `
  subscription OnUpdateResume {
    onUpdateResume {
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
export const onDeleteResume = /* GraphQL */ `
  subscription OnDeleteResume {
    onDeleteResume {
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
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience {
    onCreateExperience {
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience {
    onUpdateExperience {
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience {
    onDeleteExperience {
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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation {
    onCreateEducation {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation {
    onUpdateEducation {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation {
    onDeleteEducation {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
      id
      title
      type
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
      id
      title
      type
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
      id
      title
      type
      ResumeID
      createdAt
      updatedAt
    }
  }
`;
