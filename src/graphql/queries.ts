/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEnrollment = /* GraphQL */ `
  query GetEnrollment($id: ID!) {
    getEnrollment(id: $id) {
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
export const listEnrollments = /* GraphQL */ `
  query ListEnrollments(
    $filter: ModelEnrollmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrollments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        enrollment {
          id
          date
          status
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
      nextToken
    }
  }
`;
