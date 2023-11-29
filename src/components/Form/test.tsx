import { FormLink, FormWrapper } from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          <a href="#">My nice</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
.c0 {
  font-size: 1.4rem;
  color: #030517;
  text-align: center;
}

.c0 a {
  color: #3CD3C1;
  text-decoration: none;
  border-bottom: 0.1rem solid #3CD3C1;
  transition: color,border,0.1s ease-in-out;
}

.c0 a:hover {
  color: #29b3a3;
  border-bottom: 0.1rem solid #29b3a3;
}

<body>
  <div>
    <div
      class=""
    >
      <div
        class="c0"
      >
        <a
          href="#"
        >
          My nice
        </a>
      </div>
    </div>
  </div>
</body>
`)
  })
})
