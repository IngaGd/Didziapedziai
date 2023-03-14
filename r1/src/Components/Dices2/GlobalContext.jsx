import { createContext, useEffect } from 'react';
import { useMessages } from './useMessages';
import { useDataDelete } from './useDataDelete';
import { useDataList } from './useDataList';
import { useModal } from './useModal';
import { useDataCreate } from './useDataCreate';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

    const [messages, addMessage] = useMessages([]);
    const [deleteRes, setDeleteData] = useDataDelete(null);
    const [createRes, setCreateData] = useDataCreate(null);
    const [list, setLastUpdate] = useDataList(null);
    const [deleteModal, setDeleteModal, editModal, setEditModal] = useModal();

    useEffect(() => {
        if (null === deleteRes) {
            return;
        }
        addMessage({text: deleteRes.message.text, type: deleteRes.message.type});
        setLastUpdate(Date.now()) //pasileidiam, kai gaunam rezultata is istrinto serverio
    }, [deleteRes, addMessage, setLastUpdate]);


    //pasisetinam zinutes:
        useEffect(() => {
        if (null === createRes) {
            return;
        }
        addMessage({text: createRes.message.text, type: createRes.message.type});//idedam message
        setLastUpdate(Date.now()) //updatinam lista
    }, [createRes, addMessage, setLastUpdate]);

    return (
        <GlobalContext.Provider value={{
            messages,
            setDeleteData,
            setCreateData,
            list, //useDataList list /atiduodam i sarasiuka providerio
            deleteModal,
            setDeleteModal,
            editModal,
            setEditModal
        }}>
            {children}
        </GlobalContext.Provider>
    )
}