
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {

    // const setCategories = () => {};
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{

        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });


    test('Debe mostrarse correctamente', () => {        
        expect(wrapper).toMatchSnapshot();        
    });

    test('debe de cambiar la caja de testo ', () => {
        const input = wrapper.find('input');
        const value = 'Hola tereso'
        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe postear con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled()
        
    })

    test('Debe Llamar SetCategories y limpiar la caja de texto ', () => {
        const value='Hola Mundo';
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
    
})
