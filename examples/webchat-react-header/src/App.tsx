import { Container, Header, WebchatProvider, useClient } from '@botpress/webchat';

import './style.css';
import { theme } from './theme';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

const configuration = {
  botName: 'Webchat Header',
  botAvatar: 'https://picsum.photos/200/300',
  botDescription:
    'Hi! 👋  Welcome to webchat this is some description talking about what it is. This might be a bit longer when expanded.',
  email: {
    title: 'randomEmail@botpress.com',
    link: 'mailto:randomEmail@botpress.com',
  },
  phone: {
    title: '555-555-5555',
    link: 'tel:555-555-5555',
  },
  website: {
    title: 'https://botpress.com',
    link: 'https://botpress.com',
  },
  termsOfService: {
    title: 'Terms of service',
    link: 'https://botpress.com/terms',
  },
  privacyPolicy: {
    title: 'Privacy policy',
    link: 'https://botpress.com/privacy',
  },
}

export default function App() {
  const client = useClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme} configuration={configuration}>
      <Container>
        <Header />
      </Container>
    </WebchatProvider>
  );
}
