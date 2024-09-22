import type { MetaFunction } from '@remix-run/node'
import { Landing } from '~/pages'
export const meta: MetaFunction = () => {
  return [{ title: 'Page Title' }, { name: 'Ladning page', content: 'Content' }]
}

export default function Index() {
  return (
    <div>
      <Landing />
    </div>
  )
}
