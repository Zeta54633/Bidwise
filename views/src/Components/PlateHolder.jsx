
import PlayerPlate from "./PlayerPlate"

function PlateHolder()
{
    const plateholder = {
        minHeight: '500px',
        backgroundColor: 'gray',
        maxWidth: '1200px',
        position: 'relative',
        left: '50%',
        translate: '-50%',
        borderRadius: '20px',
        padding: '20px',
    }   

    return <div style={plateholder}>
        <PlayerPlate />
        <br></br>
        <PlayerPlate />
        <br></br>
        <PlayerPlate />
        <br></br>
    </div>
}

export default PlateHolder