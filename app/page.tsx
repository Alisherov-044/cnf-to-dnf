'use client'
import copy from 'copy-to-clipboard'
import { convert } from '@/utils'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [cnf, setCnf] = useState<string | undefined>(undefined)
  const [dnf, setDnf] = useState<string | undefined>(undefined)
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const copyRef = useRef<HTMLTextAreaElement | null>(null)

  function copyToClipboard() {
    let copyText = copyRef.current?.value
    if (!copyText?.length) return
    if (typeof copyText === 'undefined') return
    let isCopy = copy(copyText)
    if (isCopy) {
      setIsCopied(true)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsCopied(false)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [isCopied])

  return (
    <main className="home">
      <div className="container">
        <h2>Intro to Digit - CNF to DNF</h2>
        <form className="form">
          <textarea
            className="textarea"
            placeholder="Enter the CNF form"
            onChange={(e) => setCnf(e.target.value)}
            // @ts-ignore
            onPaste={(e) => setCnf(e.target.value)}
          />
          <div className="btns-wrapper">
            <button
              className="button"
              type="button"
              disabled={typeof cnf === 'undefined'}
              onClick={() =>
                typeof cnf !== 'undefined' ? setDnf(convert(cnf)) : null
              }
            >
              Convert
            </button>
            <button
              className="button"
              type="reset"
              onClick={() => {
                setCnf(undefined)
                setDnf(undefined)
              }}
            >
              Reset
            </button>
          </div>
          <div className="copy-textarea">
            <textarea
              ref={copyRef}
              className="textarea"
              placeholder="Result"
              value={dnf}
              disabled
            />
            <div className="copy">
              <svg
                onClick={copyToClipboard}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
              </svg>
              <span className={`copied ${isCopied ? 'active' : ''}`}>
                copied
              </span>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
