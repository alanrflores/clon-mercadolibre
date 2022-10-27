import React from "react";
import Forms from "../form/Forms";
import { GoLocation } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";
import styles from "./navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchingCategoryId, fetchingCategorys } from "../../store/features/categorys/categorySlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.categorys.categorys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCategorys());
  }, []);

  const limiteData = [...data].splice(6, 12);

  return (
    <>
      <div className="nav">
        <Forms />
      </div>
      <nav className="nav-container hidden lg:flex p-4">
        <div className="location flex gap-2">
          <GoLocation size="1.6em" color="#303126" />
        </div>
        <div className=" flex flex-col">
          <span className="text-xs text-gray-400">Enviar a </span>
          <span className="text-sm">Capital Federal</span>
        </div>
        <ul className="nav-ul flex w-3/6 gap-10 flex-row items-end ml-28 text-sm">
          <li className="dropDown flex">
            Categorías
            <BsChevronDown className="ml-2 mt-1" />
            <div className="childDropDown">
              <ul>
                {limiteData?.map((item) => (
                  <li key={item.id}>
                    <Link to={`category/${item.id}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}

                {/* <li>Inmuebles</li>
                  <li>Supermercado</li>
                  <li>Tecnologías</li>
                  <li>Hogar y Muebles</li>
                  <li>Electrodomésticos</li>
                  <li>Herramientas</li>
                  <li>Construcción</li>
                  <li>Deportes y Fitness</li>
                  <li>Accesorios para Vehículos</li> */}
              </ul>
            </div>
          </li>
          <li>Ofertas</li>
          <li>Historial</li>
          <li>Vender</li>
          <li>Ayuda</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
