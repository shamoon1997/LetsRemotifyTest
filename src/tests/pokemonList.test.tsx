import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import PokemonList from '../features/components/PokemonList';
import { BrowserRouter as Router } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';

const server = setupServer(
  http.get('https://pokeapi.co/api/v2/pokemon', ({ request, params, requestId }) => {
    return  HttpResponse.json({
        results: [
          { name: 'bulbasaur' },
          { name: 'ivysaur' },
        ],
      })
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders Pokemon list', async () => {
  render(
    <Provider store={store}>
      <Router>
        <PokemonList />
      </Router>
    </Provider>
  );

  expect(await screen.findByText('bulbasaur')).toBeInTheDocument();
  expect(await screen.findByText('ivysaur')).toBeInTheDocument();
});


// This doesn't work properly as I don't know much about the testing