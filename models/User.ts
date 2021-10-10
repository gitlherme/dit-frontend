export default interface User {
  id: number
  name: string
  username: string
  role: string
  bio: string
  email: string
  createdAt: string
  updatedAt: string
  avatar?: {
    url: string
  }
  socials?: {
    linkedin_url?: string
    github_url?: string
    twitter_url?: string
  }
  educations?: []
  previewExperiences?: []
  hardSkills?: []
  softSkills?: []
}