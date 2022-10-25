import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./search.module.css";

const Search = () => {
  const { product } = useParams();
  const data = useSelector((state) => state.searchs.data);
  console.log(product);

  return (
    <div className={styles.containerSearch}>
      <aside>
        <div>
          <h1>iphone</h1>
        </div>
      </aside>
      <div className={styles.containerLista}>
        <ul>
          {data.length > 0
            ? data.map((item) => (
              <div  key={item.id}>
                  <li className={styles.lista}>
                    <div className={styles.divDescription}>
                      <div className={styles.divImg}>
                        <img
                          src={item.thumbnail}
                          alt="imagen-mercadolibre"
                        />
                      </div>
                      <div className={styles.description}>
                        <Link>
                        <h2>{item.title}</h2>
                        </Link>
                        <p>{`$ ${item.price}`}</p>
                        {item.installments && 
                        <p className={styles.installments}>{`Hasta ${item.installments.quantity} cuotas sin interés`}</p>
                        }
                        <span>
                          {item.shipping.free_shipping === true ? (
                            <span className={styles.spanShipping}>
                              {"Envió Gratis"}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </div>
                  </li>
                  <hr />
                 </div> 
              
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Search;
