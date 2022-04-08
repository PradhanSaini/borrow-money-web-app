import React from "react";
import styles from './Card.module.scss'
// eslint-disable-next-line no-unused-vars
const Card = (card) => {


  return (

    <div className={styles.card}>

     <table className={styles.trr}>
         <tr >
             <td className={styles.tdd}>
             Requested Amount : 
             </td>
             <td >
             {card.amount}
             </td>
         </tr>
         <tr>
             <td>
             UPI ID : 
             </td>
             <td>
             {card.upiId}
             </td>
         </tr>
         <tr>
             <td>
             Reason : 
             </td>
             <td>
             {card.reason}
             </td>
         </tr>
         <tr>
             <td>
             Duration : 
             </td>
             <td>
             {card.duration}
             </td>
         </tr>
     </table>




      {/* <div className={styles.cardTitle}></div>
      <div className={styles.cardTitle}></div>
      <div className={styles.cardTitle}></div>
      <div className={styles.cardTitle}></div> */}
    </div>

  );
};

export default Card;