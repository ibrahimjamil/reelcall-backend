import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Query {
    activeProjects: [Project!]!
    projectCategories: [ProjectCategory!]!
    questionnaire: Questionnaire
    role(id: ID!): Role!
    roleMatches(roleId: ID!): [User!]!
    roles: [Role!]!
    project(id: ID!): Project!
    user(id: ID!): User!
    users: [User!]!
    workerTypes: [WorkerType!]!
    selectedRoleAnswers(roleId: ID!): [RoleRequirement!]!
  }

  type Mutation {
    updateRoleDetail(roleData: updateRoleData!): MutationResponse!
    addProjectCategory(category: String!): MutationResponse!
    applyForRole(roleId: ID!): MutationResponse!
    deleteHeadshots(ids: [ID!]!): MutationResponse!
    deleteProject(id: ID!): MutationResponse!
    deleteReels(ids: [ID!]!): MutationResponse!
    generateSignedS3Urls(count: Int!): [SignedS3Url!]!
    inviteTalentToRole(roleId: ID!, actorId: ID!): MutationResponse!
    setProfilePicture(id: ID!): MutationResponse!
    updateAnswer(updatedAnswer: AnswerInput!): MutationResponse!
    updateQuestion(updatedQuestion: QuestionInput!): MutationResponse!
    uploadHeadshots(headshots: [String!]!): MutationResponse!
    uploadReels(reels: [String!]!): MutationResponse!
    upsertProject(project: ProjectInput!): MutationResponse!
    updateRoleAnswer(roleData: [updateRoleAnswerData]): MutationResponse
    deleteRole(roleId: ID!): MutationResponse!
    addRole(roleData: addRoleData!): roleResponse
    addRoleAnswers(roleId: ID!, roleAnswers: [addRoleAnswersData]!): MutationResponse!
  }

  type MutationResponse {
    success: Boolean!
    errorMessage: String
  }

  type User {
    id: ID!
    role: Roles!
    name: String!
    email: String!
    profilePicture: String
    headshots: [Headshot!]!
    reels: [Reel!]!
    imdbProfile: String
    unionStatus: String
    resume: String
    fitScore: Int
    invitedToRole: Boolean
    roles: [Role!]!
  }

  input updateRoleAnswerData {
    id: ID!
    questionId: String
    answer: String
  }

  input updateRoleData {
    roleId: ID!
    name: String
    description: String
  }

  input addRoleAnswersData {
    questionId: ID!
    answer: String
  }

  type Headshot {
    id: ID!
    image: String!
    isProfilePicture: Boolean!
  }

  type Reel {
    id: ID!
    link: String!
  }

  type Project {
    id: ID!
    name: String!
    description: String!
    category: ProjectCategory!
    workerType: WorkerType!
    companyName: String
    director: String
    producer: String
    writer: String
    castingDirector: String
    startDate: Date
    location: String!
    roles: [Role!] # Should only be visible to actors & creator via directive (or at model level)
    applicants: [User!]! # Should only be visible to actors & creator via directive (or at model level)
  }

  type RoleRequirement {
    id: ID!
    questionId: ID!
    answer: String!
  }

  type ProjectCategory {
    id: ID!
    name: String!
  }

  type Role {
    id: ID!
    name: String!
    createdAt: String!
    appliedAt: String
    description: String!
    project: Project!
    fitScore: Int
    applicants: [User!] # Should only be visible to creator via directive (or at model level)
    applicantGraph: [GraphBucket!]!
  }

  type GraphBucket {
    name: String!
    bucket: String!
    count: Int!
  }

  type RoleInvitation {
    id: ID!
    actor: User!
    role: Role!
  }

  type Questionnaire {
    sections: [Section!]!
  }

  type Section {
    id: ID!
    castingTitle: String!
    actorTitle: String!
    castingSubtitle: String!
    actorSubtitle: String!
    castingHint: String!
    actorHint: String!
    questions: [Question!]!
  }

  type Question {
    id: ID!
    definition: String!
    type: QuestionType!
    differentialPoints: Int!
    required: Int!
    importanceRequired: Int!
    answers: [Answer!]!
  }

  input addRoleData {
    projectId: ID!,
    name: String,
    description: String,
  }

  type roleResponse {
    roleId: String
  }

  input QuestionInput {
    definition: String
    type: QuestionType
    differentialPoints: Int
    required: Int
    importanceRequired: Int
  }

  type Answer {
    id: ID!
    definition: String!
    order: Int!
    questionId: ID!
    question: Question!
  }

  type SignedS3Url {
    url: String!
    path: String!
  }

  input ProjectInput {
    id: ID
    name: String!
    description: String!
    location: String!
    companyName: String
    categoryId: ID!
    workerType: WorkerType!
    director: String
    producer: String
    writer: String
    castingDirector: String
    startDate: Date
  }

  input AnswerInput {
    definition: String
    order: Int
  }

  enum QuestionType {
    RadioSelect
    MultiSelectOverlap
    MultiSelectAny
    FreeformText
  }

  enum Roles {
    Admin
    Actor
    Casting
  }

  enum WorkerType {
    NonUnion
    SagAftra
  }

`;

export default typeDefs;
