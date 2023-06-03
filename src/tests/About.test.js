import {render} from '@testing-library/react'
import About from '../app/about/page'

describe('About component', ()=> {
  it('Renders on screen', () => {
    const { container } = render(<About />)

    expect(container).toMatchSnapshot()
  })
})