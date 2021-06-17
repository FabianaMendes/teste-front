import React from 'react';
import { jest } from '@jest/globals';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AuthProvider, useAuth } from './contexts/auth';
import App from './App';
import LogIn from './pages/LogIn';


describe('Login page', () => {
  afterEach(cleanup);

  describe('Shows inputs', () => {
    it('email', () => {
      render(<App/>);
      expect(screen.getByTestId('email')).toBeInTheDocument();
    })
    it('password', () => {
      render(<App/>);
      expect(screen.getByTestId('password')).toBeInTheDocument();
    })
  });

  describe('Initialize', () => {
    it('with no logged user', () => {
      const TestComponent = () => {
        const { logged } = useAuth()
        return (
          <div data-testid="status">{logged.toString()}</div>
        )
      }
      render(<AuthProvider><TestComponent/></AuthProvider>)
      expect(screen.getByTestId('status')).toHaveTextContent('false')
    })
  })

  describe('Login button', () => {
    it('Calls login function when clicked', () => {
      const mockFn = jest.fn();
      mockFn();

      render(<AuthProvider><LogIn onSubmit={mockFn}/></AuthProvider>)
      fireEvent.click(screen.getByTestId('login-btn'));
      expect(mockFn).toHaveBeenCalled();
    })
  });
});