# BARRA — Cómo ponerla en tu celular

App de seguimiento del plan de 12 semanas. Funciona sin internet una vez instalada, y guarda todo en tu teléfono (no hay servidor, no hay cuenta, nadie más ve tus datos).

## Archivos

```
index.html              la app completa
manifest.webmanifest    la hace instalable
sw.js                   funcionamiento sin conexión
icon-192.png            icono
icon-512.png            icono
icon-512-maskable.png    icono adaptable Android
```

Los seis archivos van juntos en la misma carpeta.

---

## Opción A — GitHub Pages (recomendada, gratis, 5 minutos)

1. Entra a **github.com** y crea un repositorio nuevo. Ponle `barra`. Márcalo como **Public**.
2. Botón **Add file → Upload files**. Arrastra los seis archivos. **Commit changes**.
3. Ve a **Settings → Pages** (menú izquierdo).
4. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**. **Save**.
5. Espera 1-2 minutos. Arriba aparece tu dirección: `https://TUUSUARIO.github.io/barra/`
6. Abre esa dirección **en Chrome desde tu celular**.
7. Menú de tres puntos → **Añadir a pantalla de inicio** (o **Instalar aplicación**).

Listo: queda como una app normal, con su icono, a pantalla completa y sin barra del navegador.

**En iPhone:** ábrela en **Safari** (no Chrome), botón Compartir → **Añadir a pantalla de inicio**.

---

## Opción B — Netlify Drop (aún más rápido, sin cuenta de GitHub)

1. Entra a **app.netlify.com/drop**
2. Arrastra la carpeta completa con los seis archivos.
3. Te da una dirección al instante. Ábrela en el celular e instálala igual que arriba.

---

## Opción C — Solo probarla

Abre `index.html` directamente en el navegador. Funciona todo menos la instalación como app y el modo sin conexión (eso requiere que esté servida por https).

---

## Qué hace cada pestaña

| Pestaña | Para qué |
|---|---|
| **Hoy** | La sesión que toca según el día de la semana y la semana del programa. Toca la zona de marcas para registrar cada serie — se dibujan como palitos, igual que contar en el parque. El temporizador de descanso arranca solo. |
| **Skills** | Las escaleras de progresión. Toca el peldaño que puedes hacer hoy limpio. Es tu mapa: ves exactamente qué falta para el muscle-up y el HSPU. |
| **Registro** | Retests y peso. La gráfica de peso y el historial de tests son lo que te dice si el plan está funcionando. |
| **Comida** | Proteína hacia los 150 g, agua hacia 3.5 L, creatina. Se reinicia cada día. Los botones tienen las porciones reales de comida. |
| **Plan** | La semana completa, la lista de equipo, qué hacer si no puedes ir al parque, y las reglas. Aquí también cambias la fecha de inicio. |

---

## Detalles útiles

- **La fecha de inicio manda.** Ve a *Plan → Inicio del programa* y pon el lunes en que arrancas de verdad. De ahí sale tu número de semana, y de ahí salen los avisos de retest, de descarga y los ejercicios que se desbloquean (el muscle-up asistido aparece solo en la semana 5).
- **La barra de arriba** es tu progreso: 12 rayas, una por semana. Las marrones son las semanas de descarga (8 y 12).
- **Los datos viven en tu celular.** Si borras los datos del navegador o desinstalas, se van. Si cambias de teléfono, empiezas de cero.
- **Sin conexión funciona** una vez que la abriste conectado por primera vez.

---

## Si algo se rompe

- **No se instala:** tiene que estar servida por `https://`. Abrir el archivo local no basta.
- **No guarda:** revisa que el navegador no esté en modo incógnito.
- **Se ven mal las letras:** las tipografías vienen de Google Fonts. Sin internet la primera vez, usa las del sistema — se ve distinto pero funciona igual.
