/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentInput = {
  id?: string | null,
  name: string,
  lastname: string,
  province: string,
  phoneNumber: string,
  email: string,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  province?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name: string,
  lastname: string,
  province: string,
  phoneNumber: string,
  email: string,
  enrollments?: ModelEnrollmentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelEnrollmentConnection = {
  __typename: "ModelEnrollmentConnection",
  items:  Array<Enrollment | null >,
  nextToken?: string | null,
};

export type Enrollment = {
  __typename: "Enrollment",
  id: string,
  date: string,
  status: EnrollStatus,
  student?: Student | null,
  courses?: ModelCourseConnection | null,
  createdAt: string,
  updatedAt: string,
  studentEnrollmentsId?: string | null,
  owner?: string | null,
};

export enum EnrollStatus {
  pendiente = "pendiente",
  aceptado = "aceptado",
}


export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  thumbnail: string,
  images: Array< string >,
  description: string,
  skills: string,
  limit: number,
  available: boolean,
  unlimited: boolean,
  extraDetails?: string | null,
  enrollment?: Enrollment | null,
  createdAt: string,
  updatedAt: string,
  enrollmentCoursesId?: string | null,
  owner?: string | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
  lastname?: string | null,
  province?: string | null,
  phoneNumber?: string | null,
  email?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
  thumbnail: string,
  images: Array< string >,
  description: string,
  skills: string,
  limit: number,
  available: boolean,
  unlimited: boolean,
  extraDetails?: string | null,
  enrollmentCoursesId?: string | null,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  images?: ModelStringInput | null,
  description?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  limit?: ModelIntInput | null,
  available?: ModelBooleanInput | null,
  unlimited?: ModelBooleanInput | null,
  extraDetails?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  enrollmentCoursesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
  thumbnail?: string | null,
  images?: Array< string > | null,
  description?: string | null,
  skills?: string | null,
  limit?: number | null,
  available?: boolean | null,
  unlimited?: boolean | null,
  extraDetails?: string | null,
  enrollmentCoursesId?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateEnrollmentInput = {
  id?: string | null,
  date: string,
  status: EnrollStatus,
  studentEnrollmentsId?: string | null,
};

export type ModelEnrollmentConditionInput = {
  date?: ModelStringInput | null,
  status?: ModelEnrollStatusInput | null,
  and?: Array< ModelEnrollmentConditionInput | null > | null,
  or?: Array< ModelEnrollmentConditionInput | null > | null,
  not?: ModelEnrollmentConditionInput | null,
  studentEnrollmentsId?: ModelIDInput | null,
};

export type ModelEnrollStatusInput = {
  eq?: EnrollStatus | null,
  ne?: EnrollStatus | null,
};

export type UpdateEnrollmentInput = {
  id: string,
  date?: string | null,
  status?: EnrollStatus | null,
  studentEnrollmentsId?: string | null,
};

export type DeleteEnrollmentInput = {
  id: string,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  province?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelEnrollmentFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  status?: ModelEnrollStatusInput | null,
  and?: Array< ModelEnrollmentFilterInput | null > | null,
  or?: Array< ModelEnrollmentFilterInput | null > | null,
  not?: ModelEnrollmentFilterInput | null,
  studentEnrollmentsId?: ModelIDInput | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  images?: ModelStringInput | null,
  description?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  limit?: ModelIntInput | null,
  available?: ModelBooleanInput | null,
  unlimited?: ModelBooleanInput | null,
  extraDetails?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
  enrollmentCoursesId?: ModelIDInput | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  province?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionEnrollmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionEnrollmentFilterInput | null > | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  limit?: ModelSubscriptionIntInput | null,
  available?: ModelSubscriptionBooleanInput | null,
  unlimited?: ModelSubscriptionBooleanInput | null,
  extraDetails?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    lastname: string,
    province: string,
    phoneNumber: string,
    email: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    lastname: string,
    province: string,
    phoneNumber: string,
    email: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    lastname: string,
    province: string,
    phoneNumber: string,
    email: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    images: Array< string >,
    description: string,
    skills: string,
    limit: number,
    available: boolean,
    unlimited: boolean,
    extraDetails?: string | null,
    enrollment?:  {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    enrollmentCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    images: Array< string >,
    description: string,
    skills: string,
    limit: number,
    available: boolean,
    unlimited: boolean,
    extraDetails?: string | null,
    enrollment?:  {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    enrollmentCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    images: Array< string >,
    description: string,
    skills: string,
    limit: number,
    available: boolean,
    unlimited: boolean,
    extraDetails?: string | null,
    enrollment?:  {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    enrollmentCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateEnrollmentMutationVariables = {
  input: CreateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type CreateEnrollmentMutation = {
  createEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    date: string,
    status: EnrollStatus,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        images: Array< string >,
        description: string,
        skills: string,
        limit: number,
        available: boolean,
        unlimited: boolean,
        extraDetails?: string | null,
        createdAt: string,
        updatedAt: string,
        enrollmentCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateEnrollmentMutationVariables = {
  input: UpdateEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type UpdateEnrollmentMutation = {
  updateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    date: string,
    status: EnrollStatus,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        images: Array< string >,
        description: string,
        skills: string,
        limit: number,
        available: boolean,
        unlimited: boolean,
        extraDetails?: string | null,
        createdAt: string,
        updatedAt: string,
        enrollmentCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEnrollmentMutationVariables = {
  input: DeleteEnrollmentInput,
  condition?: ModelEnrollmentConditionInput | null,
};

export type DeleteEnrollmentMutation = {
  deleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    date: string,
    status: EnrollStatus,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        images: Array< string >,
        description: string,
        skills: string,
        limit: number,
        available: boolean,
        unlimited: boolean,
        extraDetails?: string | null,
        createdAt: string,
        updatedAt: string,
        enrollmentCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    lastname: string,
    province: string,
    phoneNumber: string,
    email: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEnrollmentQueryVariables = {
  id: string,
};

export type GetEnrollmentQuery = {
  getEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    date: string,
    status: EnrollStatus,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        images: Array< string >,
        description: string,
        skills: string,
        limit: number,
        available: boolean,
        unlimited: boolean,
        extraDetails?: string | null,
        createdAt: string,
        updatedAt: string,
        enrollmentCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEnrollmentsQueryVariables = {
  filter?: ModelEnrollmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnrollmentsQuery = {
  listEnrollments?:  {
    __typename: "ModelEnrollmentConnection",
    items:  Array< {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    images: Array< string >,
    description: string,
    skills: string,
    limit: number,
    available: boolean,
    unlimited: boolean,
    extraDetails?: string | null,
    enrollment?:  {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    enrollmentCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      thumbnail: string,
      images: Array< string >,
      description: string,
      skills: string,
      limit: number,
      available: boolean,
      unlimited: boolean,
      extraDetails?: string | null,
      enrollment?:  {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      enrollmentCoursesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    lastname: string,
    province: string,
    phoneNumber: string,
    email: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    lastname: string,
    province: string,
    phoneNumber: string,
    email: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    lastname: string,
    province: string,
    phoneNumber: string,
    email: string,
    enrollments?:  {
      __typename: "ModelEnrollmentConnection",
      items:  Array< {
        __typename: "Enrollment",
        id: string,
        date: string,
        status: EnrollStatus,
        createdAt: string,
        updatedAt: string,
        studentEnrollmentsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateEnrollmentSubscription = {
  onCreateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    date: string,
    status: EnrollStatus,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        images: Array< string >,
        description: string,
        skills: string,
        limit: number,
        available: boolean,
        unlimited: boolean,
        extraDetails?: string | null,
        createdAt: string,
        updatedAt: string,
        enrollmentCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEnrollmentSubscription = {
  onUpdateEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    date: string,
    status: EnrollStatus,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        images: Array< string >,
        description: string,
        skills: string,
        limit: number,
        available: boolean,
        unlimited: boolean,
        extraDetails?: string | null,
        createdAt: string,
        updatedAt: string,
        enrollmentCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEnrollmentSubscriptionVariables = {
  filter?: ModelSubscriptionEnrollmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEnrollmentSubscription = {
  onDeleteEnrollment?:  {
    __typename: "Enrollment",
    id: string,
    date: string,
    status: EnrollStatus,
    student?:  {
      __typename: "Student",
      id: string,
      name: string,
      lastname: string,
      province: string,
      phoneNumber: string,
      email: string,
      enrollments?:  {
        __typename: "ModelEnrollmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    courses?:  {
      __typename: "ModelCourseConnection",
      items:  Array< {
        __typename: "Course",
        id: string,
        name: string,
        thumbnail: string,
        images: Array< string >,
        description: string,
        skills: string,
        limit: number,
        available: boolean,
        unlimited: boolean,
        extraDetails?: string | null,
        createdAt: string,
        updatedAt: string,
        enrollmentCoursesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    studentEnrollmentsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    images: Array< string >,
    description: string,
    skills: string,
    limit: number,
    available: boolean,
    unlimited: boolean,
    extraDetails?: string | null,
    enrollment?:  {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    enrollmentCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    images: Array< string >,
    description: string,
    skills: string,
    limit: number,
    available: boolean,
    unlimited: boolean,
    extraDetails?: string | null,
    enrollment?:  {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    enrollmentCoursesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    thumbnail: string,
    images: Array< string >,
    description: string,
    skills: string,
    limit: number,
    available: boolean,
    unlimited: boolean,
    extraDetails?: string | null,
    enrollment?:  {
      __typename: "Enrollment",
      id: string,
      date: string,
      status: EnrollStatus,
      student?:  {
        __typename: "Student",
        id: string,
        name: string,
        lastname: string,
        province: string,
        phoneNumber: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      courses?:  {
        __typename: "ModelCourseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      studentEnrollmentsId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    enrollmentCoursesId?: string | null,
    owner?: string | null,
  } | null,
};
