import { deleteGridCells, swapVerticalTiles } from '../swaps';
import Board from '../../Board';

jest.mock('../../../objects/Tile');
jest.mock('../../../objects/utilities/animation');

test('can nulled deleted tiles in game board', () => {
  const board = new Board();
  const deletePosition = { tileX: 0, tileY: 0 };
  deleteGridCells(board, [deletePosition]);
  expect(board.getTileByPosition(deletePosition)).toBeNull();
});

test('nulled cells can float up and change position to up', () => {
  // TODO: need rewrite test
  const mockUpdateBoardMethod = jest.fn();

  const board = new Board();

  // @ts-expect-error test only
  board.getTile = () => {
    return { updatePositionAndTile: mockUpdateBoardMethod };
  };
  board.setTile = mockUpdateBoardMethod;

  const deletePosition = { tileX: 0, tileY: 1 };
  deleteGridCells(board, [deletePosition]);

  const column = deletePosition.tileX;
  swapVerticalTiles(board, column);

  expect(mockUpdateBoardMethod).toHaveBeenCalled();
  // expect(mockUpdateBoardMethod).toHaveBeenCalledTimes(1);
});
