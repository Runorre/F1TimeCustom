import React from 'react';

interface DriverProps {
  driver: {
    number: number;
    name: string;
    bestLap: string;
    gap: string;
    lastLap: string;
    status : string;
    nbrTenv : number;
  };
  idx: number;
}

const OneTime: React.FC<DriverProps> = ({driver, idx}) => {
    return (
        <div key={idx}
        style={{ color: driver.status === 'YES' ? 'green' : 'inherit' }}
        className="driver-row">
          <div style={{color : "cyan"}}>{idx + 1}</div>
          <div>{driver.number}</div>
          <div>{driver.name}</div>
          <div style={{ color: driver.status === 'YES' ? 'green' : '#F020D8' }}>
          {driver.bestLap}</div>
          <div>{driver.gap}</div>
          <div className="last-lap" style={{ color: driver.status === 'YES' ? 'green' : '#FFFF00' }}>{driver.lastLap}</div>
          <div>{driver.status}</div>
          <div>{driver.nbrTenv}</div>
        </div>
    )
}

export default OneTime;