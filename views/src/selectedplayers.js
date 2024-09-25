import {create} from 'zustand'

const selectedplayers=create((set)=>({
    players:[],
    addPlayer:(name)=>set((state)=>({players:[...state.players,name]})),
    removePlayer: (name) => set((state) => ({
        players: state.players.filter(player => player !== name) 
    })),
    
}))

export default selectedplayers