export type TMilestoneDate = string | { start: string, end: string }
export type TMilestone = {
  title: string
  description: string
  date: TMilestoneDate
}

export const MILESTONES: TMilestone[] = [
  {
    title: 'Tealfeed',
    description: 'Backend engineer overseeing multiple roles and responsibilities from development and architecture to devops and database administration',
    date: {
      start: 'September 2021',
      end: 'Present',
    }
  },
  {
    title: 'Google Summer of Code',
    description: 'Worked on the open source project Inkscape',
    date: {
      start: 'May 2021',
      end: 'July 2021',
    }
  },
  {
    title: 'Started programming',
    description: 'I delved into the enchanting world of programming, with C++ as my weapon of choice – a decision that proved to be the catalyst for my epic coding journey.',
    date: 'July 2015'
  },
]
