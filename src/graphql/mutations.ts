/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createEnrollment = /* GraphQL */ `
  mutation CreateEnrollment(
    $input: CreateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    createEnrollment(input: $input, condition: $condition) {
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
export const updateEnrollment = /* GraphQL */ `
  mutation UpdateEnrollment(
    $input: UpdateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    updateEnrollment(input: $input, condition: $condition) {
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
export const deleteEnrollment = /* GraphQL */ `
  mutation DeleteEnrollment(
    $input: DeleteEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    deleteEnrollment(input: $input, condition: $condition) {
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
