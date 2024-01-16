import Heading from '@/components/Heading'
import * as S from './styles'
import Checkbox from '@/components/Checkbox'
import Radio from '@/components/Radio'
import Button from '@/components/Button'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <div key={item.name}>
        <Heading $lineBottom $lineColor="secondary" $size="small">
          {item.title}
        </Heading>
        {item.type === 'checkbox' &&
          item.fields.map((field) => (
            <Checkbox
              name={field.name}
              label={field.label}
              labelFor={field.name}
              key={field.name}
            />
          ))}

        {item.type === 'radio' &&
          item.fields.map((field) => (
            <Radio
              id={field.name}
              name={item.name}
              value={field.name}
              label={field.label}
              labelFor={field.name}
              key={field.name}
            />
          ))}
      </div>
    ))}
    <Button $fullWidth $size="medium">
      Filter
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
