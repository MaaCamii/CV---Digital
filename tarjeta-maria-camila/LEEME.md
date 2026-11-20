# Tarjeta y hoja de vida web · María Camila Chala Mena

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | **Tarjeta de contacto** (lo que se abre con el link). |
| `hoja-de-vida.html` | **Hoja de vida** en bloques desplegables. |
| `datos.js` | **Todo el contenido.** Es el único archivo que se edita para actualizar. |
| `estilos.css`, `comun.js` | Diseño y funciones compartidas. No necesitas tocarlos. |
| `contacto.vcf` | El botón "Guardar contacto" agrega tus datos a la agenda del celular. |
| `assets/` | Foto, imagen de vista previa para WhatsApp, ícono y tipografías. |

Puedes enviar un bloque abierto directamente: `.../hoja-de-vida.html#formacion` (también `#experiencia`, `#educacion`, `#procesos`, `#publicaciones`, `#idiomas`).

## Publicar en Vercel (una sola vez)

1. Crea una cuenta en vercel.com (puedes entrar con tu cuenta de Google o de GitHub).
2. **Sin GitHub:** instala Node.js, abre la Terminal dentro de esta carpeta y ejecuta `npx vercel`. Responde Enter a todo y luego ejecuta `npx vercel --prod`.
   **Con GitHub (recomendado para actualizar después):** sube esta carpeta a un repositorio nuevo, entra a Vercel, elige *Add New → Project* e importa el repositorio. Cada cambio que guardes en GitHub se publica solo.
3. En *Settings → Domains*, deja `maacamii-card.vercel.app` o conecta tu dominio propio.
4. **Importante:** si la dirección final es distinta de `https://maacamii-card.vercel.app`, reemplázala en las líneas `og:url`, `og:image` y `twitter:image` de `index.html` y `hoja-de-vida.html`. Sin ese cambio, WhatsApp no mostrará la vista previa con tu foto.

## Actualizar (cada vez que hagas un curso nuevo)

En `datos.js` también puedes cambiar la línea corta de la tarjeta (`tarjetaRol`), el resumen de la hoja de vida (`sintesis`) y las etiquetas de enfoque (`enfoques`).

Abre `datos.js`, busca `formacionContinua` y copia una línea:

```js
{ nombre: "Nombre del curso", institucion: "Institución", anio: 2026, area: "ia" },
```

Las áreas disponibles son `ia`, `publico`, `derecho`, `proyectos`, `ddhh` y `liderazgo`. La página ordena los cursos por año, actualiza los contadores y marca como **NUEVO** los del año más reciente.

## Agenda de citas

El botón "Agendar llamada · 15 min" abre tu página de reservas de Google Calendar. El link está en `datos.js` (`agenda`). Horarios, duración y preguntas del formulario se cambian en Google Calendar, no en la página. Para ocultar el botón, pon `agenda: null`.

## Pendientes

- El enlace de **Ágora "Al Aire"** es el mismo de **El Laboratorio Político**. Reemplázalo en `datos.js`.
- **PDF opcional:** sube una versión sin cédula, firma ni dirección con el nombre `hoja-de-vida.pdf` y cambia `pdf: null` por `pdf: "hoja-de-vida.pdf"`.
- El nivel de **inglés** aparece como una barra al 75 %, igual que en el PDF. Si quieres, agrega una etiqueta (por ejemplo "B2") en `datos.js`.

## Datos retirados por seguridad

Se retiraron la cédula, la tarjeta profesional, la firma, la dirección de residencia, el correo de Hotmail y los nombres de los jefes inmediatos. Como ubicación solo aparece "Medellín, Colombia".
