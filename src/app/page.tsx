"use client"
import styles from "./page.module.css"
import { Button } from "@mui/material"

export default function Home() {
  return (
    <main className={styles.main}>
      <Button
        onClick={() => {
          alert("clicked")
        }}
      >
        Click me
      </Button>
    </main>
  )
}
