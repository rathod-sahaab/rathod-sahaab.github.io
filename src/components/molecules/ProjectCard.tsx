import React from "react"

import * as styles from "./ProjectCard.module.css"
import { TECHNOLOGY_MAP } from "../../utils/constants"

const ProjectCard = ({
  title,
  description,
  link,
  children,
  tagIds,
}: React.PropsWithChildren<{
  title: string
  description: string
  link: string
  tagIds: string[]
}>) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>{children}</div>
      <div className={styles.content}>
        <a href={link} target="_blank">
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
        <div className={styles.tags}>
          {tagIds.map(tagId => {
            return <span>{TECHNOLOGY_MAP[tagId]}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
