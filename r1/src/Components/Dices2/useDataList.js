import { useState } from 'react';


export const useDataList = init => {

    const [list, setList] = useState(init);
    const [lastUpdate, setLastUpdate] = useState(Date.now());


    return [list, setLastUpdate];
}