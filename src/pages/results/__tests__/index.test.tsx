import React from "react"
import ReactDOM from "react-dom"
import { MemoryRouter } from "react-router"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import { initReactI18next } from "react-i18next"
import { MockedProvider } from "@apollo/react-testing"

import Results from "../index"

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    backend: {
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json"
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    }
  })

const middlewares: Array<any> = []
const mockStore = configureStore(middlewares)

it("renders ResultsPage component without crashing", () => {
  const initialState = {}
  const store = mockStore(initialState)

  const resultsPageDiv = document.createElement("div")
  ReactDOM.render(
    <MockedProvider mocks={[]}>
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <React.Suspense fallback={<div>Loading... </div>}>
            <Results />
          </React.Suspense>
        </Provider>
      </MemoryRouter>
    </MockedProvider>,
    resultsPageDiv
  )
})
