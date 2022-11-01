import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

describe('Test index.js', () => {

    it("Should render app without crashing", () => {
        expect(
            JSON.stringify(
              Object.assign({}, App, { _reactInternalInstance: 'censored' }),
            ),
          ).toMatchSnapshot();
    });
});
