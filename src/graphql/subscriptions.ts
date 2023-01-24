/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onCreateStudent(filter: $filter, owner: $owner) {
      id
      name
      lastname
      province
      phoneNumber
      email
      enrollments {
        items {
          id
          date
          status
          createdAt
          updatedAt
          studentEnrollmentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onUpdateStudent(filter: $filter, owner: $owner) {
      id
      name
      lastname
      province
      phoneNumber
      email
      enrollments {
        items {
          id
          date
          status
          createdAt
          updatedAt
          studentEnrollmentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onDeleteStudent(filter: $filter, owner: $owner) {
      id
      name
      lastname
      province
      phoneNumber
      email
      enrollments {
        items {
          id
          date
          status
          createdAt
          updatedAt
          studentEnrollmentsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEnrollment = /* GraphQL */ `
  subscription OnCreateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
    $owner: String
  ) {
    onCreateEnrollment(filter: $filter, owner: $owner) {
      id
      date
      status
      student {
        id
        name
        lastname
        province
        phoneNumber
        email
        enrollments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      courses {
        items {
          id
          name
          thumbnail
          images
          description
          skills
          limit
          available
          unlimited
          extraDetails
          createdAt
          updatedAt
          enrollmentCoursesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      studentEnrollmentsId
      owner
    }
  }
`;
export const onUpdateEnrollment = /* GraphQL */ `
  subscription OnUpdateEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
    $owner: String
  ) {
    onUpdateEnrollment(filter: $filter, owner: $owner) {
      id
      date
      status
      student {
        id
        name
        lastname
        province
        phoneNumber
        email
        enrollments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      courses {
        items {
          id
          name
          thumbnail
          images
          description
          skills
          limit
          available
          unlimited
          extraDetails
          createdAt
          updatedAt
          enrollmentCoursesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      studentEnrollmentsId
      owner
    }
  }
`;
export const onDeleteEnrollment = /* GraphQL */ `
  subscription OnDeleteEnrollment(
    $filter: ModelSubscriptionEnrollmentFilterInput
    $owner: String
  ) {
    onDeleteEnrollment(filter: $filter, owner: $owner) {
      id
      date
      status
      student {
        id
        name
        lastname
        province
        phoneNumber
        email
        enrollments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      courses {
        items {
          id
          name
          thumbnail
          images
          description
          skills
          limit
          available
          unlimited
          extraDetails
          createdAt
          updatedAt
          enrollmentCoursesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      studentEnrollmentsId
      owner
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onCreateCourse(filter: $filter, owner: $owner) {
      id
      name
      thumbnail
      images
      description
      skills
      limit
      available
      unlimited
      extraDetails
      enrollment {
        id
        date
        status
        student {
          id
          name
          lastname
          province
          phoneNumber
          email
          createdAt
          updatedAt
          owner
        }
        courses {
          nextToken
        }
        createdAt
        updatedAt
        studentEnrollmentsId
        owner
      }
      createdAt
      updatedAt
      enrollmentCoursesId
      owner
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onUpdateCourse(filter: $filter, owner: $owner) {
      id
      name
      thumbnail
      images
      description
      skills
      limit
      available
      unlimited
      extraDetails
      enrollment {
        id
        date
        status
        student {
          id
          name
          lastname
          province
          phoneNumber
          email
          createdAt
          updatedAt
          owner
        }
        courses {
          nextToken
        }
        createdAt
        updatedAt
        studentEnrollmentsId
        owner
      }
      createdAt
      updatedAt
      enrollmentCoursesId
      owner
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse(
    $filter: ModelSubscriptionCourseFilterInput
    $owner: String
  ) {
    onDeleteCourse(filter: $filter, owner: $owner) {
      id
      name
      thumbnail
      images
      description
      skills
      limit
      available
      unlimited
      extraDetails
      enrollment {
        id
        date
        status
        student {
          id
          name
          lastname
          province
          phoneNumber
          email
          createdAt
          updatedAt
          owner
        }
        courses {
          nextToken
        }
        createdAt
        updatedAt
        studentEnrollmentsId
        owner
      }
      createdAt
      updatedAt
      enrollmentCoursesId
      owner
    }
  }
`;
