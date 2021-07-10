import React, { useRef } from 'react'
import './App.css'

function App() {
  const form = useRef<HTMLFormElement | null>(null)
  return (
    <div className="App">
      <form ref={form} method="POST">
        <div>
          <label htmlFor="cc-number">クレジットカード番号</label>
          <input
            maxLength={16}
            type="tel"
            name="cc-number"
            id="cc-number"
            autoComplete="cc-number"
          />
        </div>
        <div>
          <label htmlFor="cc-exp-month">月</label>
          <input type="tel" id="cc-exp-month" autoComplete="cc-exp-month" />
        </div>
        <div>
          <label htmlFor="cc-exp-year">年</label>
          <input
            type="tel"
            id="cc-exp-year"
            name="cc-exp-year"
            autoComplete="cc-exp-year"
          />
        </div>
        <div>
          <label htmlFor="cc-csc">cc</label>
          <input type="tel" name="cc-csc" id="cc-csc" />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  )
}

export default App
