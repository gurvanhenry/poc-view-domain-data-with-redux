# poc-view-domain-data-with-redux

Sandbox to think about how to separate *view*, *domain* (business logic) and *api* based on redux tool.

## run to dev
```
npm run test -- --watch
```

## how view/domain/data are isolated?
- The *ui* part define which `IApi` will be in `redux actions`

- this solution use *redux-thunk* but there is [alternatives](https://redux.js.org/faq/actions#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else)

- `api` is define on store creation in *ui*
```js
import { IApi } from '../domain-shared/IApi';
import { Api } from '../data/Api';

const api: IApi = new Api();

const store = configureStore({
  reducer: {
    users: usersReducer,
  }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api }
      },
    }),
});
```

- then *domain* can use it the in *redux-thunk action* :
```js
const makeSearchResult = () => (dispatch, _, { api } : { api : IApi }) => {
    const callResult = api.callSearchUser(text);
```

## diagram 

![diagram.drawio.png](./docs/diagram.drawio.png)
