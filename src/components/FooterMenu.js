import React from 'react';
import styles from './FooterMenu.module.css';

export default function FooterMenu({ title, items }) {
    return (
        <div className={styles.MenuContainer}>
            <div className={styles.featureText}>
                <h2>{title}</h2>
                <ul className={styles.MenuList}>
                    {items && items.map((element, idx) => (
                        <li key={idx} className={styles.MenuListItem}>
                            <a href={element.url} className={styles.MenuListItemLink}>
                                {element.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}