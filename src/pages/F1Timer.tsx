import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import OneTime from '../components/OneTime';

interface Driver {
    number: number;
    name: string;
    bestLap: string;
    gap: string;
    lastLap: string;
    status : string;
    nbrTenv : number;
}



const F1Timer: React.FC = () => {

    const [drivers, setDrivers] = useState<Driver[]>([]);    
    useEffect(() => {
        const socket: Socket = io(process.env.REACT_APP_SOCKET_URL); // Remplacez par l'URL de votre serveur Socket.IO

        // Écoute de l'événement 'piloteData'
        socket.on('piloteData', (data: Driver[]) => {
            setDrivers(data);
        });

        // Nettoyage lors du démontage du composant
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="timing-screen">
            <div className="header">
                <div></div>
                <div></div>
                <div>Pilote</div>
                <div>Best Lap</div>
                <div>Gap</div>
                <div>Last Lap</div>
                <div>Out?</div>
                <div></div>
            </div>
            {drivers.map((driver, idx) => (
                <OneTime driver={driver} idx={idx}/>
            ))}
        </div>
    )
}


export default F1Timer;