import React, { useState } from 'react';
import { io, Socket } from 'socket.io-client';

const FIAPage: React.FC = () => {
    const [drivers] = useState<number[]>([2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 16, 19, 24, 25, 26, 28, 38, 44, 50, 51, 58, 88, 94, 99]);
    const [activeButtons, setActiveButtons] = useState<{ [key: number]: boolean }>({});

    const socket: Socket = io(process.env.REACT_APP_SOCKET_URL);
    
    const handleButtonClick = (buttonNumber: number) => {
        socket.emit('chronoAction', buttonNumber);

        // Toggle the button's active state
        setActiveButtons((prevState) => ({
            ...prevState,
            [buttonNumber]: !prevState[buttonNumber],
        }));
    };

    const handleResetClick = () => {
        socket.emit('resetChrono');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            {drivers.map((number) => {
                const isActive = activeButtons[number];
                return (
                    <button
                        key={number}
                        style={{
                            fontSize: '14px',
                            padding: '5px 10px',
                            backgroundColor: isActive ? 'yellow' : 'white',
                        }}
                        onClick={() => handleButtonClick(number)}
                    >
                        {number}
                    </button>
                );
            })}
            <div style={{ marginTop: '30px' }}>
                <button
                    style={{ fontSize: '24px', padding: '10px 20px' }}
                    onClick={handleResetClick}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default FIAPage;