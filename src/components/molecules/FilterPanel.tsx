import React, { useEffect, useState } from "react"
import RoundButton from "../atoms/RoundButton"

import * as styles from "./FilterPanel.module.css"

const FilterPanel = ({
  tagIds,
  activeIndex,
  setActiveIndex,
  tagIdToName,
  centered = false,
}: {
  tagIds: string[]
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  tagIdToName: any
  centered?: boolean
}) => {
  return (
    <div className={centered ? `${styles.card} ${styles.center}` : styles.card}>
      {tagIds.map((tagId: string, index: number) => {
        return (
          <RoundButton
            key={tagId}
            active={index == activeIndex}
            onClick={() => {
              setActiveIndex(index)
            }}
          >
            {tagIdToName[tagId]}
          </RoundButton>
        )
      })}
    </div>
  )
}

export default FilterPanel
