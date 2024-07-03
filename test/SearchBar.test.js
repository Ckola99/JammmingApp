import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../src/SearchBar';

describe('SearchBar Component', () => {
	it('renders input and button', () => {
		const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={() => {}} />);
		expect(getByPlaceholderText('Enter A Song, Album, or Artist')).toBeInTheDocument();
		expect(getByText('SEARCH')).toBeInTheDocument();
	});
})
