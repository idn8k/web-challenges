import { render, screen, fireEvent } from '@testing-library/react';
import Player from '.';

describe('Player component', () => {
   const mockIncreaseScore = jest.fn();
   const mockDecreaseScore = jest.fn();

   beforeEach(() => {
      render(
         <Player
            name="John Doe"
            score={5}
            onIncreasePlayerScore={mockIncreaseScore}
            onDecreasePlayerScore={mockDecreaseScore}
         />
      );
   });

   test('renders player name and score', () => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
   });

   test('renders increase and decrease buttons', () => {
      expect(screen.getByLabelText('Increase Score')).toBeInTheDocument();
      expect(screen.getByLabelText('Decrease Score')).toBeInTheDocument();
   });

   test('calls increase score function when increase button is clicked', () => {
      fireEvent.click(screen.getByLabelText('Increase Score'));
      expect(mockIncreaseScore).toHaveBeenCalledTimes(1);
   });

   test('calls decrease score function when decrease button is clicked', () => {
      fireEvent.click(screen.getByLabelText('Decrease Score'));
      expect(mockDecreaseScore).toHaveBeenCalledTimes(1);
   });
});
