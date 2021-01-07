import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas en Gif Grid Item', () => {

    const title = 'Titulo'
    const url = 'https://www.xxx.com/666'
    const wrapper = shallow( <GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    })

    test('Debe tener parrafo con titulo ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);   
        
    })

    test('debe tener la imagen igual al url y alt', () => {

        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
        
    })

    test('debe tener animate__fadeIn ', () => {

        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);

        
        
    })
    
    
    
    
    
})
