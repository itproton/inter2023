import { render, screen } from '@testing-library/react';
import { TopicsDashboard } from '.';


describe('Dashboard', () => {
    it('renders learn react link', () => {
        render(<TopicsDashboard />)
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    });
});
