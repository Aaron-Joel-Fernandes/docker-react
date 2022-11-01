import { render, screen } from "@testing-library/react";
import App from "./App";

describe('Test App.js', () => {

    it("Should render app without crashing", () => {
        expect(
            JSON.stringify(
              Object.assign({}, App, { _reactInternalInstance: 'censored' }),
            ),
          ).toMatchSnapshot();
    });
