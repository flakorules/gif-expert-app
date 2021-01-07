import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async () => {

        const category = 'One Punch';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        const { data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);               
        
    })

    test('Debe de retornar arreglo de imagenes y loading en false', async () => {

        const category = 'One Punch';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();
        const { data, loading} = result.current;
        expect(data.length).toBeGreaterThan(0)
        expect(loading).toBe(false);
        
    });
    
    
    
})
