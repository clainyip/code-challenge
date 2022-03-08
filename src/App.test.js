import {render, screen } from '@testing-library/react';
import App, {getTemperature, returnCombineArrayById} from './App';

describe('<App />', () => {
    it('Check if element generated accordingly', () => {
        render(<App />)
        expect(screen.getByTestId('title')).toHaveTextContent('Beers');
        expect(screen.getByTestId('product')).toHaveTextContent('Product');
        expect(screen.getByTestId('temperature')).toHaveTextContent('Temperature');
        expect(screen.getByTestId('status')).toHaveTextContent('Status');
    });
});

describe('test call API function', () => {
    it('test getTemperature function', async () => {
        const response = { id: '1', temperature: 2 };
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(response),
                ok: true,
            })
        );
        expect(await getTemperature('1')).toEqual(response);
    });
});

describe('test combine array function', () => {
    it('test returnCombineArrayById function', () => {
        const arr1 = [{
            id: '1',
            name: 'Pilsner',
            minimumTemperature: 4,
            maximumTemperature: 6,
        }];
        const arr2 = [{ id: '1', temperature: 2 }];
        const arr3 = returnCombineArrayById(arr1, arr2);
        expect(arr3[0].name).toEqual('Pilsner');
        expect(arr3[0].temperature).toEqual(2);
    });
});