import {render} from '@testing-library/react'
import Testing from '../components/Testing'

describe('Trying out testing', ()=> {
  it('Renders on screen', () => {
    const { container } = render(<Testing/>)

    expect(container).toMatchSnapshot()
  })
})