
function PlayerPlate()
{
    const playerplate = {
        height: '50px',
        width: '700px',
        backgroundColor: '#070F2B',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        color: 'white',
        alignItems: 'center',
        borderRadius: '40px'
    }

    return <div style={playerplate}>
        <p>Varrsan D</p>
        <p>10,000</p>
        <p>96</p>
        <p>420</p>
        <p>20.0/10</p>
    </div>
}

export default PlayerPlate;