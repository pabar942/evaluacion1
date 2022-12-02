const datos = JSON.parse(localStorage.getItem("datosGastosIngresos")) || [];

// FUNCIONES

// AGREGAR GASTO/INGRESO

const agregar = (datos, tipo) => {
  let fechaNuevoItem = prompt(`Introduce la fecha del ${tipo}`);
  let importeNuevoItem = parseInt(prompt(`Introduce el importe del ${tipo}`));
  let conceptoNuevoItem = prompt(`Introduce el concepto del ${tipo}`);

  //comprobar si datos está vacío para calcular la id
  let idNuevoItem = datos.length ? datos[datos.length - 1].id + 1 : 1;

  let nuevoItem = {
    id: idNuevoItem,
    fecha: fechaNuevoItem,
    importe: importeNuevoItem,
    concepto: conceptoNuevoItem,
    tipo: tipo,
  };
  datos.push(nuevoItem);
  return datos;
};

// MOSTRAR GASTOS/INGRESOS

const mostrar = (tipo) => {
  const resultado = datos.filter((dato) => dato.tipo === tipo);
  resultado.length
    ? console.table(resultado, ["fecha", "importe", "concepto"])
    : console.info(`no hay ningún ${tipo} para mostrar`);
};

// EDITAR GASTO/INGRESO

const editar = (datos) => {
  let opciones = "Seleccione la id a editar \n\n";
  datos.forEach(({ id, fecha, importe, concepto, tipo }) => {
    opciones += `${id} ▶ ${fecha} ▶ ${importe} ▶ ${concepto} ▶ ${tipo} \n`;
  });
  let id = parseInt(prompt(opciones));
  const resultado = datos.map((dato) => {
    if (dato.id === id) {
      let { fecha, importe, concepto, tipo } = dato;
      let mensaje = `Va a realizar cambios en \n\n ${id} ▶ ${fecha} ▶ ${importe} ▶ ${concepto} ▶ ${tipo} \n\n `;
      dato.fecha = prompt(mensaje + "Introduzca nueva fecha");
      dato.importe = prompt(mensaje + "Introduzca nuevo importe");
    }
    return dato;
  });

  return resultado;
};

// ELIMINAR GASTO/INGRESO

const eliminar = (datos) => {
  let opciones = "Seleccione la id a eliminar \n\n";
  datos.forEach(({ id, fecha, importe, concepto, tipo }) => {
    opciones += `${id} ▶ ${fecha} ▶ ${importe} ▶ ${concepto} ▶ ${tipo} \n`;
  });
  let id = parseInt(prompt(opciones));
  const resultado = datos.filter((dato) => {
    if (dato.id === id) {
      console.warn("El registro fue eliminado");
    } else return dato;
  });
  return resultado;
};

// BALANCE DE INGRESOS - GASTOS

const balance = (datos) => {
  const totalGastos = datos.reduce((suma, dato) => {
    if (dato.tipo === "gasto") return suma + dato.importe;
    else return suma;
  }, 0);
  const totalIngresos = datos.reduce((suma, dato) => {
    if (dato.tipo === "ingreso") return suma + dato.importe;
    else return suma;
  }, 0);
  console.info(
    `El total de ingresos es ${totalIngresos}€ \nEl total de gastos es ${totalGastos}€ \nEl balance es de ${
      totalIngresos - totalGastos
    }€`
  );
};

// GRABAR EN LOCAL STORAGE

const grabarLocalStorage = (item) => {
  localStorage.setItem("datosGastosIngresos", JSON.stringify(item));
};

// MENÚ PRINCIPAL

let opcion = prompt(
  "Elige una opción del menú: \n\n1️⃣ Agregar gasto \n2️⃣ Agregar ingreso \n3️⃣ Mostrar gastos \n4️⃣ Mostrar ingresos \n5️⃣ Editar registro \n6️⃣ Mostrar balance \n7️⃣ Eliminar un registro"
);
switch (parseInt(opcion)) {
  case 1:
    grabarLocalStorage(agregar(datos, "gasto"));
    break;
  case 2:
    grabarLocalStorage(agregar(datos, "ingreso"));
    break;
  case 3:
    mostrar("gasto");
    break;
  case 4:
    mostrar("ingreso");
    break;
  case 5:
    datos.length
      ? grabarLocalStorage(editar(datos))
      : console.log("No hay ningún registro");
    break;
  case 6:
    balance(datos);
    break;
  case 7:
    datos.length
      ? grabarLocalStorage(eliminar(datos))
      : console.log("No hay ningún registro");
    break;
  default:
    console.log("Opción no válida");
    break;
}
