	import { useEffect, useState } from 'react';
	import styles from './assistantShipping.module.scss';
	import { FaCheck } from 'react-icons/fa'

	export function AssistantShipping(props) {
		const [ step, setStep ] = useState(0)

		useEffect(() => {
			console.log(props.step)
			setStep(props.step)
		}, [props.step])
		
		
		return (
			<div className="container">
				<div className={styles.assistantShipping}>
					<div className={styles.timeline}>
						<ul>
							<li className={step >= 2 && styles.completed }>
								{step >= 1
									? <div className={styles.active}><FaCheck /></div> 
									: <div className={styles.checked}>1</div>
								}
								<span>Tamanho</span>
							</li>

							<li className={ step >= 3 && styles.completed }>
								{step >= 2
									? <div className={styles.active}><FaCheck /></div>
									: <div className={styles.checked}>2</div>
								}
								<span>Sabor</span>
							</li>
							<li className={ step >= 4 && styles.completed } >
								{step >= 3
									? <div className={styles.active}><FaCheck /></div> 
									: <div className={styles.checked}>3</div>
								}
								<span>Adicionais</span>
							</li>
							<li className={ step > 5 && styles.completed }>
								{step >= 4
									? <div className={styles.active}><FaCheck /></div> 
									: <div className={styles.checked}>4</div>
								}
								<span>Concluir</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}