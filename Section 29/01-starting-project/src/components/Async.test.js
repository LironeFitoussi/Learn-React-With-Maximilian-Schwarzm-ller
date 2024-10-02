import { screen, render } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    test('renders Posts if request succeeds', async () => {

        // Mocking the fetch function
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First Post' }],
        });

        // Arrange
        render(<Async />);

        // Assert
        const listItemElements = await screen.findAllByRole('listitem');
        
        // Act
        expect(listItemElements).not.toHaveLength(0);
    });
});