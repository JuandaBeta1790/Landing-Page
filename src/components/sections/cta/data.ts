import svg1 from "./assets/green-1.svg?raw";
import svg2 from "./assets/green-2.svg?raw";
import svg3 from "./assets/green-3.svg?raw";
import svg4 from "./assets/green-4.svg?raw";
import hombre from "./assets/Hombre.svg?raw";
import mujer from "./assets/Mujer.svg?raw";

export const getInvolvedSection = {
  title: "Nuestro Equipo",
  subheading1_1: "Permítenos conocer tus necesidades",
  subheading1_2: "para brindar una solución a la medida",
  initiatives: [
    {
      title: "Óscar Montoya",
      phone:"+57 3058152320",
      description: "oscar.montoya@telemetrik.com.co",
      visual: hombre,
      position: "Director financiero y comercial"  // Nuevo campo de cargo
    },
    {
      title: "Valentina Monsalve",
      phone:"+57 3058152320",
      description: "comercial@telemetrik.com.co",
      visual: mujer,
      position: "Ingeniera de ventas"  // Nuevo campo de cargo
    },
    {
      title: "Juan Pablo Restrepo",
      phone:"+57 3058152320",
      description: "juan.restrepo@telemetrik.com.co",
      visual: hombre,
      position: "Ingeniero de ventas"  // Nuevo campo de cargo
    },
  ],
  visual: "get-involved-section-image.jpg",
  callToAction: "Take Action Today for a Greener Tomorrow",
  button: "Join Our Initiatives",
};


