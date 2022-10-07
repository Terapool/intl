import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl'
import messages_ru from './translations/ru.json'
import messages_en from './translations/en.json'

const LANGS = [
    {
        value: 'en',
        messages: messages_en,
        label: 'English',
    },
    {
        value: 'ru',
        messages: messages_ru,
        label: 'Русский',
    },
]

function App() {
  const [selectedLang, setSelectedLang] = useState(navigator.language.split(/[-_]/)[0]) // ToDo: make check that initial value is 'en'/'ru' otherwise set default (e.g. 'en')
  const messages = LANGS.find(lang => lang.value === selectedLang).messages

  return (
    <IntlProvider locale={selectedLang} messages={messages}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id="app.text"
              values={{
                what: 'react-intl',
                code: chunks => <code>{chunks}</code>
              }}
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="app.learn-react-link" />
          </a>
            <select onChange={event => setSelectedLang(event.target.value)}>
               <option hidden value=''><FormattedMessage id="app.choose-lang" /></option>
                {LANGS.map(lang => {
                  return <option value={lang.value} key={lang.value}>{lang.label}</option>
                })}
            </select>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
