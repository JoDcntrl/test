import Link from "next/link";
import TextForCardsTypes from "./TextForCards.types";
import styles from './textForCards.module.scss';

const TextForCards: React.FC<TextForCardsTypes> = ({text}) => {
    const parts: React.ReactNode[] = [];

    const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;

    const linksMatchAll = text.matchAll(regex);
    const linksMatchAllArray = Array.from(linksMatchAll);

    for (let i = linksMatchAllArray.length - 1; i >= 0; i--) {
        const match = linksMatchAllArray[i];

        let link = text.slice(
          match.index,
          match.index + match[0].length
        );
    
        parts.push(match.index > 0 ? text.slice(0, match.index) : "");

        link ? parts.push(<Link href = {`mailto:${link}`}className= {styles.email}>{link}</Link>) : null;

        parts.push(match.index + match[0].length < text.length
            ? text.slice(match.index + match[0].length)
            : "");

    }

    return (
        <p>{parts.length > 0 ? parts : text}</p>
    )
}

export default TextForCards

