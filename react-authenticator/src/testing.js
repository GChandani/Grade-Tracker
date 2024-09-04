import React from 'react';
import { render, screen } from '@testing-library/react';
import Classes from './Classes';

test('class links work', () => {
  render(<Classes selectedTab="tab1" onTabChange={() => {}} />);
  const classLinks = screen.getAllByRole('link');
  expect(classLinks).toHaveLength(2);
});

test('highlights the selected tab', () => {
  render(<Classes selectedTab="tab1" onTabChange={() => {}} />);
  const activeTab = screen.getByText('Class 1');
  expect(activeTab).toHaveClass('active');
});

test('dashboard title renders correctly', () => {
  render(<Dashboard />);
  const title = screen.getByText('Student Dashboard');
  expect(title).toBeInTheDocument();
});

test('changes to the selected tab when clicking a class link', () => {
  render(<Dashboard />);
  const classLink = screen.getByText('Class 2');
  fireEvent.click(classLink);
  expect(classLink).toHaveClass('active');
});
