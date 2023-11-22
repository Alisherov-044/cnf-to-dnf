'use client'
import { useState } from 'react'
import { convert } from '@/utils'

export default function Home() {
  const [cnf, setCnf] = useState<string>('')
  const [dnf, setDnf] = useState<string>('')

  return (
    <main className="home">
      <div className="container">
        <h2>Intro to Digit - CNF to DNF</h2>
        <form className="form">
          <textarea
            className="textarea"
            placeholder="Enter the CNF form"
            onChange={(e) => setCnf(e.target.value)}
          />
          <button
            className="button"
            type="button"
            onClick={() => setDnf(convert(cnf))}
          >
            Convert
          </button>
          <textarea
            className="textarea"
            placeholder="Result"
            value={dnf}
            disabled
          />
        </form>
      </div>
    </main>
  )
}
