import Retiro from "./public/images/Retiro.png";
import Palmitas from "./public/images/Palmitas.png";
import SanCristobal from "./public/images/SanCristobal.png";
import SanJero from "./public/images/SanJeronimo.png";
import GrafRet from "./public/images/GrafRetiro.png";
import grafsan from "./public/images/GrafSanJero1.png";
import GrafPalm from "./public/images/GrafPalmita.png";

export const innovationsSection = {
  title: "Casos de Éxito",
  subheading1_1: "Descubre Nuestras Últimas Innovaciones en Tratamiento de Agua",
  subheading1_2: "Impulsadas por tecnología y la interoperabilidad utilizando los recursos de AWS",
  innovations: [
    {
      title: "Planta de tratamiento de agua potable el Retiro",
      description:
        "En Telemetrik, comprendemos los retos que enfrentan las comunidades en el acceso y control del agua potable. Instalamos un sistema de monitoreo inteligente en la bocatoma, planta de tratamiento, tanques de almacenamiento y sistema de bombeo, alimentado por energía solar fotovoltaica. Gracias a la integración de tecnologías de operación e información, los datos de caudal, nivel y presión se envían a servidores en AWS para su análisis en tiempo real. Esto mejoró la toma de decisiones, redujo los tiempos de resolución en un 15%, y permitió un ahorro del 20% en agua y 10% en energía, facilitando además el reporte a las entidades gubernamentales. Con esta solución, logramos optimizar los procesos, mejorar la eficiencia operativa y garantizar el cumplimiento de las normativas ambientales. Nuestro sistema proporciona una visión integral que ayuda a las comunidades a gestionar sus recursos hídricos de manera sostenible.",
      visual: Retiro,
      hoverVisual:GrafRet,
    },
    {
      title: "Planta de tratamiento de agua potable San Jerónimo",
      description:
        "El cliente no contaba con información en tiempo real de las variables de su proceso, lo que dificultaba la presentación de informes a las entidades gubernamentales. Para resolver esto, implementamos un sistema de control inteligente en los tanques de almacenamiento, equipándolos con sensores de nivel, caudal y válvulas para evitar el rebose. Además, instalamos equipos de comunicaciones con VPN y un gateway para integrar protocolos de TO a TI, como Modbus RTU y Modbus TCP a MQTT en AWS IoT Core, enviando la información directamente a la nube. Esto permitió un monitoreo eficiente del sistema de potabilización, desde el caudal de entrada hasta los niveles en los tanques y la calidad del agua distribuida, logrando una reducción del 5% en el índice de agua no contabilizada.",
      visual: SanJero,
      hoverVisual:grafsan,
    },
    {
      title: "Planta de ultrafiltración inteligente Palmitas",
      description:
        "La planta de tratamiento de agua potable convencional del cliente no contaba con la capacidad ni la instrumentación necesaria para monitorear el proceso y tomar decisiones informadas para reportar a las entidades gubernamentales. En respuesta, Telemetrik instaló una planta de ultrafiltración completamente automatizada, incorporando tecnología avanzada como PLC, variadores de velocidad, sistemas fotovoltaicos, dosificación de químicos, comunicaciones y dispositivos Edge para capturar la información y enviarla a la nube mediante un enlace celular con VPN y MQTT seguro. Esta solución permitió calcular KPIs clave como turbidez promedio diaria, cloro residual y eficiencia de la planta, lo que resultó en un aumento del 5% en la eficiencia de la planta de ultrafiltración, una mejora en la calidad de la turbidez de salida (de 1.5 NTU a 1 NTU) y una reducción del 10% en la dosificación de hipoclorito de sodio, manteniendo la calidad del agua potable conforme a las normas.",
      visual: Palmitas,
      hoverVisual:GrafPalm,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Explore the Future of Green Energy with [Company Name]",
  button: "Learn More",
};
