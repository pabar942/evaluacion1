# Controlador de gastos e ingresos

Módulo para el control y administración de gastos dentro de la aplicación de finanzas que, mediante el siguiente menú, nos permite realizar diferentes operaciones.

1. Agregar un gasto
2. Agregar un ingreso
3. Mostrar todos los gastos
4. Mostrar todos los ingresos
5. Editar un registro
6. Mostrar el balance
7. Eliminar un registro

## Opciones 1 y 2 (Agregar gasto o ingreso)

Una vez escogido el tipo de dato que queremos agregar (gasto ó ingreso) se nos pedirá el resto de información mediante cuadros de diálogo, teniendo que definir así los siguientes campos:

- Fecha
- Importe
- Concepto

Actualmente no está desarrollada la validación de datos, la cual queda pospuesta para futuras versiones.

Como ejemplo, el registro de un gasto quedaría así:

```
id: 1 (autoincrementado)
fecha: 11/11/22
importe: 50
concepto: combustible
tipo: gasto
```

## Opciones 3 y 4 (Mostrar gastos o ingresos)

Estas opciones del menú nos permiten visualizar los datos en un formato de tabla.

| Fecha    | Importe | concepto     |
| -------- | ------- | ------------ |
| 11/11/22 | 50      | combustible  |
| 15/11/22 | 300     | seguro coche |

## Opción 5 (Editar un registro)

Con esta opción se visualizarán todos los registros, tanto gastos como ingresos, y se nos pedirá introducir la id del cual queremos modificar.

**sólo se permite modificar la fecha y el importe. El tipo y el concepto se mantienen**.

## Opción 6 (Mostrar el balance)

Desde aquí podremos ver un balance en el que se nos mostrará la suma total de los gastos, la suma total de los ingresos y la diferencia entre ámbos.

## Opción 7 (Eliminar un registro)

Al igual que en la opción para editar registros, se mostrará un cuadro de diálogo con todos los registros en el cual tendremos que indicar la id del gasto o ingreso que será eliminado.
