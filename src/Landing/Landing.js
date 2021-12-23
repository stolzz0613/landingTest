import React, {useState, useEffect} from 'react'
import {face, mountains, background, vhs} from '../assets';
import './Landing.scss';

export default function Landing() {
    const [offset, setOffset] = useState(0);
    const [cursor, setcursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleScroll() {
          setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);

    useEffect(() => {
        const handleCursor = e => {
            setcursor({
                x: e.offsetX,
                y: e.offsetY
            });
        }

        window.addEventListener("mousemove", handleCursor);

        return () => {
          window.removeEventListener("mousemove", handleCursor);
        };
    }, [cursor]);

    return (
        <div className='container' style={{ backgroundImage: `url(${background})`, padding: '50px'}}>
            <div className='noisy' />
            <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', left: '50px', alignContent: 'center'}}>
                <img
                    alt='vhs'
                    className='vhs'
                    src={vhs}
                />
                <h1 className='title' style={{ fontSize: '20px', zIndex: '4'}} >PROJECTS</h1>
            </div>
            <div style={{ zIndex: '4' }}>
                <h1 className='title'>
                    Give me Wi-fi and <br />
                    I'll give you the world
                </h1>
                <h1 className='name'>
                    {`< Andres Bustos /> `}
                </h1>
            </div>
            <img
                className='mountains'
                src={mountains}
                alt='mountains'
                style={{
                    filter: 'blur(4px) brightness(80%)',
                    transform: `translateY(${cursor.y * 0.01 - 800}px) translateX(${cursor.x * 0.01 - 40}px)`,
                    width: '150%',
                    zIndex: 1
                }}
            />
            <img
                className='mountains'
                src={mountains}
                alt='mountains'
                style={{
                    transform: `translateY(${cursor.y * 0.03 - 100}px) translateX(${cursor.x * 0.03 - 40}px)`,
                    zIndex: 3
                }}
            />
            <img className='face'
                alt='face'
                src={face}
                style={{
                    transform: `translateY(${offset * 0.5}px)`
                }}
            />
        </div>
    )
}
