import { render } from '@testing-library/react'
import Home from '../page'

describe('App', () => {
  it('renders without crashing', () => {
    render(<Home />)
    // If we get here without errors, the app is running
  })
}) 