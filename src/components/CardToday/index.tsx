import styles from './cardToday.module.scss'
import { FaCheck } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export function CardToday(props) {
    const [promotion, setPromotion] = useState([])
    const [points, setPoints] = useState('')
    useEffect(() => {
        const date = new Date()
        const dte = props.today
        const today = dte.filter((obj, i) => { 
            if(obj.day === date.getDay()){
                return obj.day
            }
        })
        setPromotion(today)
        
    },[props.today])

    const handleToday = async () => {
        const pts = promotion[0].points
        console.log(pts)
        const pointsOld =  localStorage.getItem('points');
        console.log(parseInt(pointsOld) )
        localStorage.setItem('points', parseInt(pointsOld) + pts)
        window.location.href = '/'
    }

    return (
        <div className={styles.cardContainer}>
            {promotion.map((item, i) => 
                <div key={i} className={styles.cardContent}>
                    <h1>Pizza do dia:</h1>
                    <img src="/images/pizza-calabresa.jpg" alt={item.pizza} />
                    <span>{item.pizza}</span><br />
                    <label className={styles.points}>Pontos {item.points}pts</label><br />
                    <label>Ingredientes: </label>
                    <p>mussarela, peito de peru, palmito, parmesão, oregano</p>
                    
                    <div className={ styles.cardPrice }>
                        <span>R$ {item.price},00</span>
                        <button onClick={handleToday}>Quero!
                            <FaCheck />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}