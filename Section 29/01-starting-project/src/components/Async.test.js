import { screen, render } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    test('renders Posts if request succeeds', async () => {
        // Arrange
        render(<Async />);

        // Assert
        const listItemElements = await screen.findAllByRole('listitem');
        
        // Act
        expect(listItemElements).not.toHaveLength(0);
    });
});