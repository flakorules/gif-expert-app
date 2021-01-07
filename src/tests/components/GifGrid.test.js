import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en GifGrid', () => {

    const category = 'metallica';
    test('debe mostrarse correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{
            id: '666',
            url: 'https://www.666.cl/666.jpg',
            title: '666'
        },
        {
            id: '667',
            url: 'https://www.666.cl/666.jpg',
            title: '666'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    })





})
