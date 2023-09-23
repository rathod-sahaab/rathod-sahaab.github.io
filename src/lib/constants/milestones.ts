export type TMilestoneDate = string | { start: string, end: string }
export type TMilestone = {
  title: string
  date: TMilestoneDate
}

export const MILESTONES: TMilestone[] = [
  {
    title: 'Graduated',
    date: 'July 2022'
  },
  {
    title: 'Google Summer of Code',
    date: {
      start: 'May 2021',
      end: 'July 2021',
    }
  },
  {
    title: 'Started learning to code in C++',
    date: 'July 2015'
  },
]
