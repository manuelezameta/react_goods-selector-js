import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  const getButton = good => {
    if (good === selectedGoods) {
      return (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={() => setSelectedGoods(undefined)}
        >
          -
        </button>
      );
    }

    return (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={() => setSelectedGoods(good)}
      >
        +
      </button>
    );
  };

  return (
    <main className="section container">
      {selectedGoods === undefined ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGoods} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGoods(undefined)}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selectedGoods ? 'has-background-success-light' : ''
              }
            >
              <td>{getButton(good)}</td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
