import Sidebar from "@/components/sidebar/Sidebar"; 
import styles from "./pay.module.css";

export default function Home() {
  return (
    <main>
      <div className="sidebar">
              <Sidebar />{" "}
            </div>
            <div className="mainContent">
              <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
                Реквізити для оплати
              </h1>
            
        <div className={styles.container}>
          <div className={styles.overlayBorder}>
            <div className={styles.payment}>
              <div>
              <img src="/paycode.jpg" alt="paycode" className={styles.payc}/> </div>
              <div>
                <b>Отримувач: </b> ЄРМОЛЕНКО ТЕТЯНА МАРКІВНА
              </div>
              <div>
                <b>IBAN: </b> UA503052990000026000036306210
              </div>
              <div>
                <b>РНОКПП/ЄДРПОУ: </b> 3161712360
              </div>
              <div>
                <b> Призначення платежу: </b> Поповнення рахунку
              </div>
            </div>
          </div>
        </div>
        </div>
    </main>
  );
}
