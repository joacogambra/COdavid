import React from 'react'
import { useState, useEffect } from 'react'

export default function Frases() {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['La madurez llega cuando dejas de poner excusas"',
        'Transforma los obstáculos en oportunidades"',
        'No te preocupes por los errores y fracasos"']
    const [text, setText] = useState('')    
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <div className='banner'>
            <div className='title-w-coin'>
                <h1>Trade Sin Limites</h1>
                <div className="col2">
                    <img src="./Coin2.png" alt="coin" className='coinimg' />
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col1">
                        <h2>{`"`}<span className='wrap'>{text}</span>{`|`}</h2>
                        <p>T.S.L FINANCE SERVICE S.R.L</p>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}


{/* <p>La madurez llega cuando dejas de poner excusas y comenzas a hacer cambios</p>
        <p>Transforma los obstáculos en oportunidades y las dudas en determinación</p>
        <p>No te preocupes por los errores y fracasos. Preocupate por las oportunidades que pierdes si no lo intentas</p>
        <p>La actitud es una pequeña cosa que hace una gran diferencia</p> */}
