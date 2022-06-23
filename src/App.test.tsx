import { describe, expect, it } from 'vitest'

import App from './App'

import { render, screen, userEvent } from '../test-utils'

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)

    const welcomeText = screen.getByText(/Hello Vite \+ React!/i)

    screen.debug(welcomeText)

    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
  })
})
