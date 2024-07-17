import { Provider } from "react-redux";
import { store } from "@/app/store";
import { Router } from "@/app/routes";


export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

