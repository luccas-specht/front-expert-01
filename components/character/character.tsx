import Image from 'next/image';
import Styles from './character.module.css';

export function Character() {
  return (
    <div className={Styles.container}>
      <div className={Styles.device}>
        <Image
          src="/images/device.png"
          width={145}
          height={283}
          alt="Telefone"
        />
      </div>
      <div className={Styles.bubble}>
        <Image
          src="/images/speech-bubble.png"
          width={64}
          height={71}
          alt="Balão"
        />
      </div>
      <div className={Styles.character}>
        <Image
          src="/images/character.png"
          width={183}
          height={246}
          alt="Personagem"
        />
      </div>
      <div className={Styles.background}>
        <Image
          src="/images/background.png"
          width={328}
          height={318}
          alt="Fundo"
        />
      </div>
      <hr />
    </div>
  );
}
