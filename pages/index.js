import { Page } from '../templates/Page';
import { UserForm } from '../components/UserForm';
import { Toggle } from '../components/Toggle';

export default function Home() {
  return (
    <Page>
      <Toggle />
      <UserForm/>
    </Page>
  )
}
